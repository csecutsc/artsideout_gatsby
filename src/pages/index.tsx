import React from 'react';
import { Text, Flex, Heading } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Hero } from '../components/home/';

const IndexPage = () => {
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
          color="pink.400"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Sponsors
        </Heading>

        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="pink.400"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Partners
        </Heading>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
