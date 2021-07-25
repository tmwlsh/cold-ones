import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Accordion } from "../accordion";
import { Container } from "../container";

import * as styles from "./styles.module.scss";

import Chevron from "../../svgs/chevron-down.svg";

const AccordionGrid = () => {

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState();

  const selectChange = (e) => {
    console.log('sortType', sortType);
    if (e.target.value === 'ABV High to Low') {
      setSortType('high to low')
    } else if (e.target.value === 'ABV Low to High') {
      setSortType('low to high')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios('https://api.punkapi.com/v2/beers');
        if (sortType === 'high to low') {
          setData(result.data.splice(0, 12).sort((a, b) => (a.abv < b.abv) ? 1 : -1));
        } else if (sortType === 'low to high') {
          setData(result.data.splice(0, 12).sort((a, b) => (a.abv > b.abv) ? 1 : -1));
        } else {
          setData(result.data.splice(0, 12));
        }
      } catch (error) {
        setIsError(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    };
    fetchData();
  }, [sortType]);

  return (
    <div className={styles.accordionGrid}>
      <Container>
        <h3>Our Favourites</h3>
        <div className={styles.sortDropdown}>
          <Chevron />
          <select onChange={e => selectChange(e)}>
            <option defaultValue disabled hidden>Sort by</option>
            <option>ABV High to Low</option>
            <option>ABV Low to High</option>
          </select>
        </div>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (
          <div className={styles.loading}>Loading brewskies ...</div>
        ) : (
          <>
            <ul className={styles.accordionGridList}>
              {data.map(beer => (
                <li key={beer.id}>
                  <Accordion data={beer} />
                </li>
              ))}
            </ul>
          </>
        )}
      </Container>
    </div>
  )
}

export { AccordionGrid };
