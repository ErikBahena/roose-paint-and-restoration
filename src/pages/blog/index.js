import React from "react";
import { graphql } from "gatsby";

import Pagination from "../../components/blog/Pagination";
import RecentPosts from "../../components/blog/RecentPosts";
import PageTitle from "../../components/PageTitle";
import BlogPost from "../../templates/BlogPost";

function index({ location, data }) {
  const blogPosts = data.allMarkdownRemark.edges;

  const paginationPageCount = Math.round(blogPosts.length / 3);

  return (
    <main>
      <PageTitle location={location} />

      <section className="blog__area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {blogPosts
                  ? blogPosts.map((postData) => (
                      <BlogPost key={postData.node.id} {...postData.node} />
                    ))
                  : "No Posts"}
                {paginationPageCount > 1 && (
                  <Pagination paginationPageCount={paginationPageCount} />
                )}
              </div>
            </div>
            <RecentPosts posts={blogPosts.slice(0, 3)} />
          </div>
        </div>
      </section>
    </main>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/blog)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            publisherName
            description
            date
            title
            image {
              childImageSharp {
                fixed(width: 760, height: 455, fit: COVER) {
                  src
                }
              }
            }
            sidebarImage {
              childImageSharp {
                fixed(height: 100, width: 100, fit: COVER) {
                  src
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default index;
