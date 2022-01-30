import React from "react";
import { alphanumericFilter } from "../../helpers";

import { formatDistance, subDays } from "date-fns";
import { Link } from "gatsby";

export default function RecentPosts({ posts }) {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4">
      <div className="sidebar__wrapper-2">
        <div className="sidebar__widget mb-40">
          <div className="sidebar__widget-top mb-30">
            <h3 className="sidebar__widget-title">Recent Posts</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              <ul>
                {posts &&
                  posts.map((post, i) => {
                    return (
                      <li key={i}>
                        <div className="rc__post d-flex align-items-center">
                          <div className="rc__post-thumb mr-20">
                            <img
                              src={
                                post.node.frontmatter.sidebarImage
                                  .childImageSharp.fixed.src
                              }
                              alt="recent post"
                            />
                          </div>
                          <div className="rc__post-content">
                            <h3 className="rc__post-title">
                              <Link
                                to={`/blog/${alphanumericFilter(
                                  post.node.frontmatter.title
                                )}`}
                              >
                                {post.node.frontmatter.title}
                              </Link>
                            </h3>
                            <div className="rc__meta">
                              <span>
                                {formatDistance(
                                  subDays(
                                    new Date(post.node.frontmatter.date),
                                    0
                                  ),
                                  new Date(),
                                  { addSuffix: true }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
