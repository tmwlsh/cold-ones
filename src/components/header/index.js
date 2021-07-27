import React from "react";
import scrollTo from 'gatsby-plugin-smoothscroll';


import * as styles from "./styles.module.scss";

import headerImg from "../../images/header.jpg";

const Header = () => {

  return (
    <header className={styles.header}>
      <img src={headerImg} alt="Cold Ones Header Image" />
      <p className={styles.headerScrollText}>Premium Lagers</p>
      <p className={styles.headerScrollText}>Delicious Ales</p>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Cold<span>Ones</span></h1>
        <button
          onClick={() => scrollTo('#beers-grid')}
          className={styles.headerCta}
        >
          View Brewskies
        </button>
      </div>
    </header>
  )
}

export { Header };
