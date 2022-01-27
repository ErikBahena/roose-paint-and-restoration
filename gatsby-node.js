const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/services)/" } }
      ) {
        nodes {
          id
          frontmatter {
            urlRoute
          }
        }
      }
    }
  `);
  const templatePath = path.resolve(`src/templates/ServiceDetails.js`);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `services/${node.frontmatter.urlRoute}`,
      component: templatePath,
      context: {
        id: node.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
