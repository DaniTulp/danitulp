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

      <div className="flex flex-col items-center ">
        <h1 className="text-4xl font-bold font-display">Snippets</h1>
        <p className="max-w-lg mt-2">
          A place where I collect useful(?) snippets of code.
        </p>
        <ul className="mt-4">
          {snippets.map((snippet) => (
            <li key={snippet.link}>
              <Link href={snippet.link}>
                <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500">
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
