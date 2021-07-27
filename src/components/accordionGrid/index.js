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
    if (e.target.value === 'ABV High to Low') {
      setSortType('high to low')
    } else if (e.target.value === 'ABV Low to High') {
      setSortType('low to high')
    } else if (e.target.value === 'Name A - Z') {
      setSortType('name a-z')
    } else if (e.target.value === 'Name Z - A') {
      setSortType('name z-a')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios('https://api.punkapi.com/v2/beers');
        if (sortType === 'high to low') {
          data.sort((a, b) => (a.abv < b.abv) ? 1 : -1);
        } else if (sortType === 'low to high') {
          data.sort((a, b) => (a.abv > b.abv) ? 1 : -1);
        } else if (sortType === 'name a-z') {
          data.sort((a, b) => (a.name > b.name) ? 1 : -1);
        } else if (sortType === 'name z-a') {
          data.sort((a, b) => (a.name < b.name) ? 1 : -1);
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
    <div className={styles.accordionGrid} id="beers-grid">
      <Container>
        <h3>Our Favourites</h3>
        <div className={styles.sortDropdown}>
          <Chevron />
          <select onChange={e => selectChange(e)}>
            <option defaultValue disabled hidden>Sort by</option>
            <option>ABV High to Low</option>
            <option>ABV Low to High</option>
            <option>Name A - Z</option>
            <option>Name Z - A</option>
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
