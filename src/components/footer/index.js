import React from "react";

import { Container } from "../container";

import * as styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <p>&copy; {new Date().getFullYear()} - Cold Ones</p>
          <p><a target="_blank" href="https://www.tmwlsh.co.uk">By Tom Walsh</a></p>
        </div>
      </Container>
    </footer>
  )
}

export { Footer };
