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
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        px={8}
        mb={16}
      >
        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Sponsors
        </Heading>

        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Partners
        </Heading>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
