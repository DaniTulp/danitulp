import { Layout } from "components/Layout";
import { snippets } from "lib/getSnippets";
import Head from "next/head";
import Link from "next/link";

export default function SnippetsPage() {
  return (
    <Layout>
      <Head>
        <title>Snippets</title>
      </Head>
      <div className="flex flex-col max-w-2xl mx-auto">
        <div className="prose md:prose-lg lg:prose-xl dark:prose-dark">
          <h1 className="text-4xl font-bold font-display">Snippets</h1>
          <p>
            A place where I collect useful(?) snippets of code and showcase fun
            ideas.
          </p>
        </div>
        <ul className="mt-4 list-none">
          {snippets.map((snippet) => (
            <li key={snippet.link}>
              <Link href={snippet.link}>
                <a className="inline-block text-lg rotate-0 link active hover:-rotate-2">
                  {snippet.module.meta.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
