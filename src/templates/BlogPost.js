import React from "react";
import { format } from "date-fns";
import { Link } from "gatsby";

export default function BlogPost(postData) {
  return (
    <article className="postbox__item format-image mb-50 transition-3">
      <div className="postbox__thumb w-img">
        <Link to={`/blog/${encodeURI(postData.frontmatter.title)}`}>
          <img
            src={postData.frontmatter.image.childImageSharp.fixed.src}
            alt="blog header"
          />
        </Link>
      </div>
      <div className="postbox__content">
        <div className="postbox__meta">
          <span>
            <i className="far fa-calendar" />{" "}
            {format(new Date(postData.frontmatter.date), "MM/dd/yyyy")}
          </span>
          <span>
            <i className="far fa-user" /> {postData.frontmatter.publisherName}
          </span>
        </div>
        <h3 className="postbox__title">
          <Link to={`/blog/${encodeURI(postData.frontmatter.title)}`}>
            {postData.frontmatter.title}
          </Link>
        </h3>
        <div className="postbox__text">
          <p>{postData.frontmatter.description}</p>
        </div>
        <div className="postbox__read-more">
          <Link
            to={`/blog/${encodeURI(postData.frontmatter.title)}`}
            className="r-btn"
          >
            read more
          </Link>
        </div>
      </div>
    </article>
  );
}
