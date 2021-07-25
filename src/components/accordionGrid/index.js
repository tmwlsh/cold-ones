import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Accordion } from "../accordion";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

const AccordionGrid = () => {

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios('https://api.punkapi.com/v2/beers');
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.accordionGrid}>
      <Container>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div>Loading brewskies ...</div>
        ) : (
          <ul className={styles.accordionGridList}>
            {data.map(beer => (
              <li key={beer.id}>
                <Accordion data={beer} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  )
}

export { AccordionGrid };
