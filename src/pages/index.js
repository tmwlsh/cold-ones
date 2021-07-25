import * as React from "react";

import { Layout } from "../components/layout";
import { AccordionGrid } from "../components/accordionGrid";
import { BlogRow } from "../components/blogRow";

const IndexPage = () => {

  const blogData = [
    {
      id: 1,
      title: 'The carbon negative crew',
      imageSrc: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      url: 'blog/the-carbon-negative-crew'
    },
    {
      id: 2,
      title: 'Equity for punks has exceeded £20million',
      imageSrc: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80',
      url: 'blog/equity-for-punks-has-exceeded-20million'
    },
    {
      id: 3,
      title: 'Weekly referral rewards are back',
      imageSrc: 'https://images.unsplash.com/photo-1441985969846-3e7c90531139?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      url: 'blog/weekly-referral-rewards-are-back'
    },
    {
      id: 4,
      title: 'Equity for punks standard benefits',
      imageSrc: 'https://images.unsplash.com/photo-1600366060302-9fb7682b062b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
      url: 'blog/equity-for-punks-standard-benefits'
    }
  ];

  return (
    <Layout>
      <AccordionGrid />
      <BlogRow data={blogData} />
    </Layout>
  )
}

export default IndexPage;
