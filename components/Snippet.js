import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "components/Layout";

export default function Snippet({ meta, snippets, children }) {
  const router = useRouter();
  const snippetIndex = snippets.findIndex(
    (snippet) => snippet.link === router.pathname
  );
  const previous = snippets[snippetIndex + 1];
  const next = snippets[snippetIndex - 1];

  return (
    <Layout>
      <Head>
        <title>Snippets - {meta.metaTitle || meta.title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <article>
        <div className="flex flex-col lg:items-center xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="relative max-w-3xl pb-8 font-sans prose md:prose-lg lg:prose-xl dark:prose-dark">
            <MDXProvider>{children}</MDXProvider>
          </div>
        </div>
        <footer className="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2">
          {(next || previous) && (
            <div className="py-8 space-y-8">
              {next && (
                <div>
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase">
                    Next Snippet
                  </h2>
                  <div className="text-purple-500 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
                    <Link href={next.link}>
                      <a>{next.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previous && (
                <div>
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase">
                    Previous Snippet
                  </h2>
                  <div className="text-purple-500 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
                    <Link href={previous.link}>
                      <a>{previous.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/snippets">
              <a className="text-purple-500 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-400">
                &larr; Back to the snippets
              </a>
            </Link>
          </div>
        </footer>
      </article>
    </Layout>
  );
}
