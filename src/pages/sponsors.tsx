// import React, { useState, useCallback } from 'react';

// export default function GeolocationPage() {
//   return (
//     <div>
//       <h1>Geolocation</h1>
//       <p>Your location is:</p>
//       <p>Latitude:</p>
//       <p>Longitude:</p>

//       <button>Get Current Location</button>
//     </div>
//   );
// }
import React from 'react';
import {
  Text,
  Heading,
  Flex,
  Avatar,
  Box,
  Stack,
  SimpleGrid
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const SponsorsPage = () => {
  const data: any = useStaticQuery(graphql`
    query MyQuery {
      allGraphCmsSponsor {
        nodes {
          name
          isPartner
          logo {
            gatsbyImageData(width: 200)
            altText
          }
        }
      }
    }
  `);

  const sponsored = data.allGraphCmsSponsor.nodes.filter(
    (node: { isPartner: Boolean }) => !node.isPartner
  );
  const partners = data.allGraphCmsSponsor.nodes.filter(
    (node: { isPartner: Boolean }) => node.isPartner
  );

  return (
    <Layout>
      <Stack spacing={4} align="stretch">
        <Heading
          as={Text}
          size="lg"
          fontWeight="bold"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Thank you to all of our Sponsors and Partners who helped ARTSIDEOUT
          2021 be what it is today.
        </Heading>
        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Sponsors
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={4} align="stretch">
          {sponsored.map((sponsor: any) => {
            return (
              <Box rounded="lg" shadow="md" maxW="xl" padding={5}>
                <Stack spacing={2} align="stretch">
                  <GatsbyImage
                    objectFit="cover"
                    image={sponsor.logo.gatsbyImageData}
                    alt={sponsor.name}
                  />
                  <Heading
                    as={Text}
                    size="sm"
                    color="#E81D77"
                    textAlign={['center', 'center', 'center', 'center']}
                  >
                    {sponsor.name}
                  </Heading>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>
        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Partners
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={4} align="stretch">
          {partners.map((sponsor: any) => {
            return (
              <Box rounded="lg" shadow="md" maxW="xl" padding={5}>
                <Stack spacing={2} align="stretch">
                  <GatsbyImage
                    objectFit="cover"
                    image={sponsor.logo.gatsbyImageData}
                    alt={sponsor.name}
                  />
                  <Heading
                    as={Text}
                    size="sm"
                    color="#E81D77"
                    textAlign={['center', 'center', 'center', 'center']}
                  >
                    {sponsor.name}
                  </Heading>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};

export default SponsorsPage;
