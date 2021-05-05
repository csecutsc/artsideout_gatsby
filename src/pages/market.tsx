import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Img,
  Heading
} from '@chakra-ui/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const MarketPage = () => {
  return (
    <Layout>
      <Seo title="Team" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="pink.400"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Working on it
      </Heading>
    </Layout>
  );
};

export default MarketPage;
