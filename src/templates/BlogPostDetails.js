import React from "react";
import { format } from "date-fns";
import { graphql, Link } from "gatsby";
import RecentPosts from "../components/blog/RecentPosts";
import PageTitle from "../components/PageTitle";

function BlogPostDetails({ data }) {
  return (
    <main>
      <PageTitle location={data.blogDetails.frontmatter.title} />
      <section className="blog__area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item postbox__item-single format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img">
                    <img
                      src={
                        data.blogDetails.frontmatter.image.childImageSharp.fixed
                          .src
                      }
                      alt="blog title background"
                    />
                  </div>
                  <div className="postbox__content postbox__content-single">
                    <div className="postbox__meta">
                      <span>
                        <i className="far fa-calendar-check" />{" "}
                        {format(
                          new Date(data.blogDetails.frontmatter.date),
                          "MM/dd/yyyy"
                        )}
                      </span>
                      <span>
                        <i className="far fa-user" />{" "}
                        {data.blogDetails.frontmatter.publisherName}
                      </span>
                    </div>
                    <h3 className="postbox__title">
                      {data.blogDetails.frontmatter.title}
                    </h3>
                    <div
                      className="postbox__text postbox__text-single mb-35"
                      dangerouslySetInnerHTML={{
                        __html: data.blogDetails.html,
                      }}
                    ></div>
                  </div>
                </article>
              </div>
            </div>

            {data.recentPosts.edges.length > 0 && (
              <RecentPosts posts={data.recentPosts.edges.slice(0, 3)} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export const query = graphql`
  query BlogPostDetails($id: String) {
    blogDetails: markdownRemark(id: { eq: $id }) {
      frontmatter {
        publisherName
        date
        description
        title
        image {
          childImageSharp {
            fixed(width: 760, height: 455, fit: INSIDE) {
              src
            }
          }
        }
        sidebarImage {
          childImageSharp {
            fixed(width: 10, height: 10, fit: INSIDE) {
              src
            }
          }
        }
      }
      html
    }

    recentPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/blog)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
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

export default BlogPostDetails;
