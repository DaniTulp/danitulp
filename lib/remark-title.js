const visit = require("unist-util-visit");

module.exports = function () {
  return (tree) => {
    return visit(tree, "code", (node, index) => {
      const [language, title] = (node.lang || "").split(":");
      if (!title) {
        return;
      }

      const titleNode = {
        type: "html",
        value: `<span class="remark-code-wrapper"><span class="remark-code-title">${title}</span></span>`.trim(),
      };
      tree.children.splice(index, 0, titleNode);
      node.lang = language;
    });
  };
};
