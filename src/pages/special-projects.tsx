import React, { useState } from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  SimpleGrid,
  Text,
  Heading,
  Center,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  Button,
  Box,
  Flex,
  chakra,
  useColorModeValue
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { CreateFriendlyUrl } from '../helpers';
import { SearchIcon } from '@chakra-ui/icons';

const SpecialProjects = () => {
  const data: any = useStaticQuery(graphql`
    query GetSpecialProjects {
      allGraphCmsProject {
        nodes {
          title
          remoteId
          displayImage {
            gatsbyImageData(width: 500, height: 500)
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          elements {
            ... on GraphCMS_Installation {
              id
              remoteId
              profiles {
                name
                remoteId
              }
              images {
                gatsbyImageData(width: 500, height: 500)
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 500)
                  }
                }
              }
            }
            ... on GraphCMS_Activity {
              id
              remoteId
              title
              startTime
              videoUrl
              profiles {
                remoteId
                name
              }
            }
          }
          profiles {
            name
            remoteId
          }
        }
      }
    }
  `);

  const studio = data.allGraphCmsProject.nodes.filter(
    (node: { elements: { id: string }[] }) =>
      Object.keys(node.elements[0]).length > 0 &&
      node.elements[0].id.includes('Installation')
  );
  const performance = data.allGraphCmsProject.nodes.filter(
    (node: { elements: { id: string }[] }) =>
      node.elements[0].id.includes('Activity')
  );

  return (
    <Layout>
      <Seo title="Special Projects" />
      {/* <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Center>
              <SearchIcon color="gray.300" />
            </Center>
          }
        />
        <Input variant="filled" placeholder="Search Installations" size="lg" />
      </InputGroup> */}

      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Special Projects
      </Heading>

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        Projects currated by the ARTSIDEOUT team.
      </Heading>
      <Divider />
      {/* <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        In thinking of “Endurance”, artists create a diverse body of works.
        Click on an installation to learn more!
      </Heading> */}
      <SimpleGrid columns={[2, null, 4]} spacing={2}>
        {studio.map((data: any, i: number) => {
          if (Object.keys(data.elements[0]).length === 0) {
            return <div />;
          }

          return (
            <Center>
              <Link
                as={GatsbyLink}
                to={`/installation/${CreateFriendlyUrl(
                  data.title,
                  data.elements[0].remoteId
                )}`}
              >
                <GatsbyImage
                  objectFit="cover"
                  image={
                    data.elements[0].images[0] &&
                    data.elements[0].images[0].localFile.childImageSharp
                      ? data.elements[0].images[0].localFile.childImageSharp
                          .gatsbyImageData
                      : ''
                  }
                  alt={
                    data.elements[0].images[0]
                      ? data.elements[0].images[0].altText
                      : data.title
                  }
                />
                <Heading
                  as="h3"
                  size="md"
                  color="primary.800"
                  fontWeight="bold"
                  lineHeight={1.5}
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {data.title}
                </Heading>
                {data.profiles.map((data: any, i: number) => (
                  <Text
                    size="md"
                    color="primary.800"
                    textAlign={['center', 'center', 'left', 'left']}
                  >
                    {data.name}
                  </Text>
                ))}
              </Link>
            </Center>
          );
        })}
      </SimpleGrid>

      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Special Projects
      </Heading>

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        marginBottom="30px"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Projects curated and commissioned by the ARTSIDEOUT team.
      </Heading>

      <SimpleGrid columns={[1, 1, 3]} spacing={4}>
        {performance.map((event: any, i: number) => {
          return (
            <div>
              <Link
                // color={useColorModeValue('gray.800', 'white')}
                display="block"
                href={`/performance/${CreateFriendlyUrl(
                  '',
                  event.elements[0].remoteId
                )}`}
                style={{ textDecoration: 'none' }}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('pink.100', 'pink.300')
                }}
              >
                <Box
                  height="auto"
                  width="auto"
                  mx="auto"
                  rounded="lg"
                  shadow="md"
                  maxW="2xl"
                  key={i}
                >
                  <Box p={6}>
                    <Box>
                      <Heading
                        as="h3"
                        size="md"
                        color="#E81D77"
                        fontWeight="bold"
                        lineHeight={1.5}
                        textAlign={['center', 'center', 'left', 'left']}
                      >
                        {event.title}
                      </Heading>
                      {event.profiles.length > 0 && (
                        <Link
                          target="_blank"
                          href={`/artist/${CreateFriendlyUrl(
                            event.profiles[0].name,
                            event.profiles[0].remoteId
                          )}`}
                          fontWeight="bold"
                          size="md"
                        >
                          {event.profiles[0].name}
                        </Link>
                      )}
                      <GatsbyImage
                        objectFit="cover"
                        image={
                          event.displayImage &&
                          event.displayImage.localFile.childImageSharp
                            ? event.displayImage.localFile.childImageSharp
                                .gatsbyImageData
                            : ''
                        }
                        alt={
                          event.displayImage
                            ? event.displayImage.altText
                            : event.title
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>
            </div>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default SpecialProjects;
