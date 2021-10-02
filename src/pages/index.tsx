import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Text, Flex, Heading } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Hero } from '../components/home/';

import PropTypes from 'prop-types';

interface LayoutData {
  sponsors: {
    siteMetadata: {
      title: string;
    };
  };
  partners: {
    siteMetadata: {
      title: string;
    };
  };
}

interface PageProps {
  children?: any;
}

const IndexPage = () => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
