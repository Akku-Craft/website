export type GitHubProfile = {
  public_repos: number;
  followers: number;
  following: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
};

type GitHubData = {
  profile: GitHubProfile | null;
  repos: GitHubRepo[] | null;
  totalCommits: number | null;
  hasError: boolean;
};

type GitHubContributor = {
  contributions: number;
};

const GITHUB_REVALIDATE_SECONDS = 60 * 60 * 6;

function createGitHubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };
  const token = process.env.GITHUB_TOKEN;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function fetchAllOrganizationRepos(
  organization: string,
  headers: HeadersInit,
): Promise<GitHubRepo[] | null> {
  const allRepos: GitHubRepo[] = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://api.github.com/orgs/${organization}/repos?sort=updated&per_page=100&page=${page}`,
      {
        headers,
        next: { revalidate: GITHUB_REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      return null;
    }

    const pageRepos = (await response.json()) as GitHubRepo[];
    if (pageRepos.length === 0) {
      break;
    }

    allRepos.push(...pageRepos);

    if (pageRepos.length < 100) {
      break;
    }

    page += 1;
  }

  return allRepos.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
  );
}

async function getCommitCountForRepo(
  owner: string,
  repo: string,
  headers: HeadersInit,
): Promise<number | null> {
  let page = 1;
  let total = 0;

  while (true) {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contributors?anon=true&per_page=100&page=${page}`,
      {
        headers,
        next: { revalidate: GITHUB_REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      if (response.status === 409) {
        return 0;
      }

      return null;
    }

    const contributors = (await response.json()) as GitHubContributor[];
    if (contributors.length === 0) {
      break;
    }

    total += contributors.reduce(
      (pageTotal, contributor) => pageTotal + contributor.contributions,
      0,
    );

    if (contributors.length < 100) {
      break;
    }

    page += 1;
  }

  return total;
}

export async function getGitHubData(
  organization: string,
  repoLimit = 12,
): Promise<GitHubData> {
  const headers = createGitHubHeaders();
  const [profileResponse, allRepos] = await Promise.all([
    fetch(`https://api.github.com/orgs/${organization}`, {
      headers,
      next: { revalidate: GITHUB_REVALIDATE_SECONDS },
    }),
    fetchAllOrganizationRepos(organization, headers),
  ]);

  const profile = profileResponse.ok
    ? ((await profileResponse.json()) as GitHubProfile)
    : null;

  const repos = allRepos;
  const visibleRepos = repos ? repos.slice(0, repoLimit) : null;
  const commitCounts = visibleRepos
    ? await Promise.all(
        visibleRepos.map((repo) =>
          getCommitCountForRepo(repo.owner.login, repo.name, headers),
        ),
      )
    : null;

  const totalCommits = commitCounts
    ? commitCounts.reduce<number>((sum, count) => sum + (count ?? 0), 0)
    : null;

  return {
    profile,
    repos: visibleRepos,
    totalCommits,
    hasError:
      !profileResponse.ok ||
      repos === null ||
      (commitCounts !== null && commitCounts.some((count) => count === null)),
  };
}
