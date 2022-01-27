import React from "react";
import PageTitle from "../../components/PageTitle";
import GalleryPost from "../../templates/GalleryPost";
import { graphql } from "gatsby";

const index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <PageTitle location={location} />
      <section className="portfolio__area pt-125 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
              <div className="section__title-wrapper mb-80 text-center">
                <span className="section__title-pre section__title-pre-3 center">
                  Latest Projects
                </span>
                <h2 className="section__title section__title-2">
                  Our Latest Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {posts &&
              posts.map((post) => (
                <GalleryPost key={post.id} {...post.frontmatter} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/galleryPosts)/" } }
    ) {
      nodes {
        id
        frontmatter {
          date
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 370, maxHeight: 370) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default index;
