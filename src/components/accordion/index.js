import React, { useState } from "react";

import * as styles from "./styles.module.scss";
import Chevron from "../../svgs/chevron-down.svg";

const Accordion = ({data}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (e) => {
    setIsOpen(!isOpen);
  }

  const classes = [styles.accordion, isOpen ? styles.accOpen : styles.accClosed];

  return (
    <button onClick={e => toggleAccordion(e)} className={classes.join(" ")}>
      <Chevron />
      <p className={styles.accordionName}>{data.name}</p>
      <div className={styles.accordionInner}>
        <p>{data.tagline}</p>
        <p>ABV: {data.abv}%</p>
        <p>First Brewed: {data.first_brewed}</p>
      </div>
    </button>
  )
}

export { Accordion };
