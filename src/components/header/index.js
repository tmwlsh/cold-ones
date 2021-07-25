import React from "react";

import * as styles from "./styles.module.scss";

import headerImg from "../../images/header.jpg";

const Header = () => {

  const slideToBeers = (e) => {
    e.preventDefault();
  }

  return (
    <header className={styles.header}>
      <img src={headerImg} alt="Cold Ones Header Image" />
      <p className={styles.headerScrollText}>Premium Lagers</p>
      <p className={styles.headerScrollText}>Delicious Ales</p>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>Cold<span>Ones</span></h1>
        <button
          onClick={e => slideToBeers(e)}
          className={styles.headerCta}
        >
          View Brewskies
        </button>
      </div>
    </header>
  )
}

export { Header };
