import React, { useState } from "react";
import { graphql } from "gatsby";

import Pagination from "../../components/blog/Pagination";
import RecentPosts from "../../components/blog/RecentPosts";
import PageTitle from "../../components/PageTitle";
import BlogPost from "../../templates/BlogPost";

function Index({ location, data }) {
  const allBlogPosts = data.allMarkdownRemark.edges;

  const [index, setIndex] = useState(0);
  const [currentBlogPosts, setCurrentBlogPosts] = useState(
    allBlogPosts.slice(index * 3, index * 3 + 3)
  );

  const paginationPageCount = Math.ceil(allBlogPosts.length / 3);

  const handleIndexChange = (newIndex) => {
    setIndex(newIndex);
    setCurrentBlogPosts(allBlogPosts.slice(newIndex * 3, newIndex * 3 + 3));
  };

  return (
    <main>
      <PageTitle location={location} />

      <section className="blog__area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {allBlogPosts.length > 0 ? (
                  currentBlogPosts.map((postData) => (
                    <BlogPost key={postData.node.id} {...postData.node} />
                  ))
                ) : (
                  <h2>No Current Blog Posts... </h2>
                )}

                {paginationPageCount > 1 && (
                  <Pagination
                    paginationPageCount={paginationPageCount}
                    handleIndexChange={handleIndexChange}
                    index={index}
                  />
                )}
              </div>
            </div>

            {allBlogPosts.length > 0 && (
              <RecentPosts posts={allBlogPosts.slice(0, 3)} />
            )}
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
              publicURL
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
        }
      }
    }
  }
`;

export default Index;
