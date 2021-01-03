import { Layout } from "components/Layout";
import Head from "next/head";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Dani Tulp - Developer</title>
      </Head>
      <div>
        <div className="py-20">
          <h1 className="text-5xl text-transparent">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500">
              Dani Tulp
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  );
}
