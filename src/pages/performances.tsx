import React from 'react';
import { Text, Heading, Divider } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Card } from '../components/performances';
import { graphql, useStaticQuery } from 'gatsby';

const PerformancesPage = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllPerformances {
      installations: allGraphCmsInstallation {
        nodes {
          remoteId
          title
          profiles {
            name
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Performances" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Performances
      </Heading>
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Currently Happening
      </Heading>
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Upcoming Performances
      </Heading>
      {Card('hello world', 'hello world', 'hello world')}
      <Divider />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Past Performances
      </Heading>
    </Layout>
  );
};

export default PerformancesPage;
