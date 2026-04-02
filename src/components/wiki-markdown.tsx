import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type WikiMarkdownProps = {
  source: string;
};

export default function WikiMarkdown({ source }: WikiMarkdownProps) {
  return (
    <article className="rounded-base border-2 border-border bg-background font-normal shadow-shadow">
      <div className="space-y-6 px-5 py-6 md:px-6 md:py-7">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            sub: ({ children }) => (
              <sub className="text-[0.8em] text-foreground/70 align-sub md:text-[0.85em]">
                {children}
              </sub>
            ),
            h1: ({ children }) => (
              <h1 className="text-3xl font-medium leading-tight text-foreground md:text-4xl">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mt-8 text-2xl font-medium leading-tight text-foreground">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-6 text-xl font-medium leading-tight text-foreground">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-sm font-normal leading-relaxed text-foreground/80 md:text-base">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc space-y-2 pl-5 text-sm font-normal leading-relaxed text-foreground/80 md:text-base">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal space-y-2 pl-5 text-sm font-normal leading-relaxed text-foreground/80 md:text-base">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-border bg-secondary-background px-4 py-3 text-sm font-normal italic text-foreground/75 md:text-base">
                {children}
              </blockquote>
            ),
            pre: ({ children }) => (
              <pre className="overflow-x-auto rounded-base border-2 border-border bg-secondary-background p-4 text-sm font-mono font-normal shadow-shadow">
                {children}
              </pre>
            ),
            code: ({ children, className }) => {
              const isBlock = className?.includes("language-");

              if (isBlock) {
                return (
                  <code className="font-mono text-sm font-normal">
                    {children}
                  </code>
                );
              }

              return (
                <code className="rounded-sm border border-border bg-secondary-background px-1.5 py-0.5 font-mono text-[0.85em] font-normal">
                  {children}
                </code>
              );
            },
            strong: ({ children }) => (
              <strong className="font-medium text-foreground">
                {children}
              </strong>
            ),
            a: ({ href, children }) => {
              const isInternal = href?.startsWith("/");

              if (isInternal && href) {
                return (
                  <Link
                    href={href}
                    className="underline underline-offset-2 hover:no-underline"
                  >
                    {children}
                  </Link>
                );
              }

              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                >
                  {children}
                </a>
              );
            },
          }}
        >
          {source}
        </ReactMarkdown>
      </div>
    </article>
  );
}
