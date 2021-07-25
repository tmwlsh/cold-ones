import React, { useState } from "react";

import * as styles from "./styles.module.scss";

const Accordion = ({data}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (e) => {
    setIsOpen(!isOpen);
  }

  const classes = [styles.accordion, isOpen ? styles.accOpen : styles.accClosed];

  return (
    <div onClick={e => toggleAccordion(e)} className={classes.join(" ")}>
      <p className={styles.accordionName}>{data.name}</p>
      <div className={styles.accordionInner}>
        <p>{data.tagline}</p>
        <p>First Brewed: {data.first_brewed}</p>
      </div>
    </div>
  )
}

export { Accordion };
