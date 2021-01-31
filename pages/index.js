import { Layout } from "components/Layout";
import Head from "next/head";
import { Profile } from "components/Profile";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Dani Tulp - Developer</title>
      </Head>
      <article className="flex flex-col flex-1 h-full mx-auto space-y-8">
        <h1 className="text-4xl text-transparent md:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-teal-400">
            Hey I'm Dani Tulp
          </span>
        </h1>
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:space-x-4">
          <Profile />
          <p className="max-w-xl text-lg">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-teal-400">
              W
            </span>
            elcome to my little space on the internet.
          </p>
        </div>
      </article>
    </Layout>
  );
}
