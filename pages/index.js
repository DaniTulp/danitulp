import { Layout } from "components/Layout";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box } from "components/Three/Scene";

const Scene = dynamic(() => import("components/Three/Scene"), {
  ssr: false,
});

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Dani Tulp - Developer</title>
      </Head>
      <div className="flex flex-col flex-1 h-full pt-20 space-y-8">
        <h1 className="text-5xl text-transparent">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500">
            Dani Tulp
          </span>
        </h1>
        <div className="flex-1 h-full border-2 rounded dark:border-gray-700">
          <Scene>
            <Box position={[4.2, 0, 0]} />
          </Scene>
        </div>
      </div>
    </Layout>
  );
}
