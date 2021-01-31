const mdxPrism = require("mdx-prism");
const visit = require("unist-util-visit");

const withTM = require("next-transpile-modules")([
  "@react-three/drei",
  "three",
  "react-spring/three",
  // "postprocessing",
]);

const tokenClassNames = {
  tag: "text-code-red",
  "attr-name": "text-code-yellow",
  "attr-value": "text-code-green",
  deleted: "text-code-red",
  inserted: "text-code-green",
  punctuation: "text-code-white",
  keyword: "text-code-purple",
  string: "text-code-green",
  function: "text-code-blue",
  boolean: "text-code-red",
  comment: "text-gray-400 italic",
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("./lib/remark-title")],
    rehypePlugins: [
      mdxPrism,
      () => {
        return (tree) => {
          visit(tree, "element", (node, _, __) => {
            let [token, type] = node.properties.className || [];
            if (token === "token") {
              node.properties.className = [tokenClassNames[type]];
            }
          });
        };
      },
    ],
  },
});
module.exports = withTM(
  withMDX({
    images: {
      domains: [
        "i.scdn.co", // Spotify Album Art
      ],
    },
    pageExtensions: ["js", "jsx", "mdx"],
  })
);
