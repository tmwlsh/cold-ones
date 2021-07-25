import React from "react";
import { Link } from "gatsby";

import { Container } from "../container";

import * as styles from "./styles.module.scss";

import Chevron from "../../svgs/chevron-down.svg";

const BlogRow = ({data}) => {

  const fakeBlogRedirect = (e) => {
    e.preventDefault();
    alert("I didn't add any blog posts 😢 sorry");
  }

  return (
    <div className={styles.blogRow}>
      <Container size="small">
        <div className={styles.blogRowInner}>
          <h3 className={styles.blogRowTitle}>Read what we wrote</h3>
          { data && (
            <ul className={styles.blogRowGrid}>
              {data.map(post => (
                <li key={post.id}>
                  <img src={post.imageSrc} alt={post.title} />
                  <Link onClick={e => fakeBlogRedirect(e)} to={post.url} className={styles.blogPostCta}>
                    <Chevron />
                    <h4>{post.title}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          ) }
        </div>
      </Container>
    </div>
  )
}

export { BlogRow };
