import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/section-heading";
import { getGitHubData } from "@/lib/github";
import { ArrowUpRight, FolderGit2, Star } from "lucide-react";

type GitHubSectionsProps = {
  organization: string;
  visibleRepoLimit?: number;
};

export default async function GitHubSections({
  organization,
  visibleRepoLimit = 8,
}: GitHubSectionsProps) {
  const { profile, repos, totalCommits } = await getGitHubData(organization);
  const repoProjects = (repos ?? []).slice(0, visibleRepoLimit);

  return (
    <>
      <section
        id="stats"
        className="mb-8 rounded-base border-2 border-border bg-secondary-background p-6 shadow-shadow"
      >
        <SectionHeading index="05" title="GitHub Stats" />

        {profile ? (
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-base border-2 border-border bg-main p-4 text-main-foreground shadow-shadow">
              <p className="font-mono text-xs uppercase tracking-[0.2em]">
                Repos
              </p>
              <p className="text-3xl font-heading">{profile.public_repos}</p>
            </div>
            <div className="rounded-base border-2 border-border bg-chart-2 p-4 text-black shadow-shadow">
              <p className="font-mono text-xs uppercase tracking-[0.2em]">
                Followers
              </p>
              <p className="text-3xl font-heading">{profile.followers}</p>
            </div>
            <div className="rounded-base border-2 border-border bg-chart-3 p-4 text-black shadow-shadow">
              <p className="font-mono text-xs uppercase tracking-[0.2em]">
                Commits
              </p>
              <p className="text-3xl font-heading">
                {totalCommits?.toLocaleString() ?? "N/A"}
              </p>
            </div>
          </div>
        ) : (
          <Alert variant="destructive">
            <AlertTitle>GitHub stats unavailable</AlertTitle>
            <AlertDescription>
              The GitHub API could not be reached at render time. Please retry
              later.
            </AlertDescription>
          </Alert>
        )}
      </section>
    </>
  );
}
