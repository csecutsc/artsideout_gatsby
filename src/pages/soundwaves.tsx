import React from 'react';
import { Text, Heading, SimpleGrid, Box, Avatar, Flex, Link } from '@chakra-ui/react';

import { Layout, Seo } from '../components';

const MarketPage = () => {

  const test = [
    {
      "name": "keshavaa shaiskandan",
      "heading": "comp sci kiddo",
      "bio": "loves dogs and playing basketball, 3rd year computer science at uoft. lorem ipsum blah blah blah blah blah blah blah blah",
      "links": [
        {
          "type": "Youtube",
          "url": "www.youtube.com",
        },
        {
          "type": "Google",
          "url": "www.google.com",
        }
      ]
    },
    {
      "name": "keshavaa shaiskandan",
      "heading": "comp sci kiddo",
      "bio": "loves dogs and playing basketball, 3rd year computer science at uoft. lorem ipsum blah blah blah blah blah blah blah blah",
      "links": [
        {
          "type": "Youtube",
          "url": "https://www.youtube.com",
        },
        {
          "type": "Google",
          "url": "https://www.google.com",
        }
      ]
    }
  ]


  return (
    <Layout>
      <Seo title="Art Market" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Working on it
      </Heading>
      <SimpleGrid columns={[1, 1, 3]} spacing={4}>
        {test.map((artist) => {
          return (
            <Box padding="10px" width="400px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Flex justifyContent="center" alignItems="center" direction="column">
                <Avatar marginBottom="15px" src={"sdf"} />
                <Heading
                  as={Text}
                  size="lg"
                  color="#E81D77"
                  textAlign={['center', 'center', 'left', 'left']}
                >{artist.name}</Heading>
                <Heading
                  as={Text}
                  size="md"
                  fontWeight="light"
                  color="#E81D77"
                  pb="10px"
                  textAlign={['center', 'center', 'left', 'left']}
                >{artist.heading}</Heading>

                <Heading
                  as={Text}
                  size="md"
                  fontWeight="light"
                  color="#E81D77"
                  pb="10px"
                  textAlign={['center', 'center', 'left', 'left']}
                >{artist.bio}</Heading>

                {artist.links.map((link) => {
                  return (
                    <Link ><a target="_blank" href={link.url}>{link.type}</a></Link>
                  )
                })}

              </Flex>
            </Box>
          )
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default MarketPage;
