const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      services: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/services)/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }

      blogDetails: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content/blog)/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);
  const serviceDetails = path.resolve(`src/templates/ServiceDetails.js`);
  const blogDetails = path.resolve(`src/templates/BlogPostDetails.js`);

  result.data.services.nodes.forEach((node) => {
    createPage({
      path: `services/${node.frontmatter.title.replace(/[^A-Za-z0-9]/g, "")}`,
      component: serviceDetails,
      context: {
        id: node.id,
      },
    });
  });

  result.data.blogDetails.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.frontmatter.title.replace(/[^A-Za-z0-9]/g, "")}`,
      component: blogDetails,
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
