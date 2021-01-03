function importAll(r) {
  return r.keys().map((fileName) => ({
    link: `/snippets${fileName.substr(1).replace(/.mdx$/, "")}`,
    module: r(fileName),
  }));
}

export const snippets = importAll(
  require.context("pages/snippets/", true, /\.mdx$/)
);

export async function getStaticProps() {
  return {
    props: {
      snippets: snippets.map((snippet) => ({
        title: snippet.module.meta.title,
        link: snippet.link,
      })),
    },
  };
}
