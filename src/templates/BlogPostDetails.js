import React from "react";
import { format } from "date-fns";
import { graphql, Link } from "gatsby";
import RecentPosts from "../components/blog/RecentPosts";
import PageTitle from "../components/PageTitle";

function BlogPostDetails({ data }) {
  return (
    <main>
      <BlogPostDetailsTemplate
        title={data.blogDetails.frontmatter.title}
        date={data.blogDetails.frontmatter.date}
        publisherName={data.blogDetails.frontmatter.publisherName}
        image={data.blogDetails.frontmatter.image.childImageSharp.fixed.src}
        headerImage={
          data.blogDetails.frontmatter.headerImage.childImageSharp.fixed.src
        }
        body={data.blogDetails.html}
        recentPosts={data.recentPosts.edges}
      />
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
        headerImage {
          childImageSharp {
            fixed(width: 1920, height: 460, fit: INSIDE) {
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

export const BlogPostDetailsTemplate = ({
  title,
  date,
  publisherName,
  image,
  headerImage,
  body,
  recentPosts,
  isPreview,
}) => {
  return (
    <>
      <PageTitle image={headerImage} location={title} />

      <section className="blog__area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                <article className="postbox__item postbox__item-single format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img">
                    <img src={image} alt="blog title background" />
                  </div>
                  <div className="postbox__content postbox__content-single">
                    <div className="postbox__meta">
                      <span>
                        <i className="far fa-calendar-check" />{" "}
                        {format(new Date(date), "MM/dd/yyyy")}
                      </span>
                      <span>
                        <i className="far fa-user" /> {publisherName}
                      </span>
                    </div>
                    <h3 className="postbox__title">{title}</h3>
                    <div
                      className="postbox__text postbox__text-single mb-35"
                      dangerouslySetInnerHTML={{
                        __html: body,
                      }}
                    ></div>
                  </div>
                </article>
              </div>
            </div>

            {!isPreview && recentPosts.length > 0 && (
              <RecentPosts posts={recentPosts.slice(0, 3)} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
