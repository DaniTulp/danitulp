import { Layout } from "components/Layout";
import ActiveLink from "components/Link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Dani Tulp - Developer</title>
      </Head>
      <div className="flex flex-col items-center">
        <div className="prose md:prose-lg lg:prose-xl dark:prose-dark">
          <h1>About</h1>
          <p>
            Hey! I'm Dani 🌷. A developer and creator, this site is my personal
            little playground. I like disco music 🎸 and tech.
          </p>
          <p>
            Currently interested in <code>react-three-fiber</code>,{" "}
            <code>Next.js</code>, <code>Tailwind</code> and <code>Laravel</code>
            .{" "}
            <ActiveLink href="/snippets">
              <a className="font-thin active link">Check out my snippets!</a>
            </ActiveLink>
          </p>
          <p>
            Like what you see and are interested in working with me?{" "}
            <a
              className="link active"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:danitulp@gmail.com"
            >
              Drop me a line!
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
