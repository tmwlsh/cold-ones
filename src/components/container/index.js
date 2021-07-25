import React from "react";

import * as styles from "./styles.module.scss";

const Container = ({children, size="large"}) => {
  const classes = [styles.container, styles[size]];
  return (
    <div className={classes.join(" ")}>
      {children}
    </div>
  )
}

export { Container };
