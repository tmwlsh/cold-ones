import React from "react";

import * as styles from "./styles.module.scss";

const Accordion = ({data}) => {

  return (
    <div className={styles.accordion}>
      <p>{data.title}</p>
      <div className={styles.accordionInner}>
        <p>{data.tagline}</p>
        <p>First Brewed: {data.first_brewed}</p>
      </div>
    </div>
  )
}

export { Accordion };
