import React from 'react';
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import {
  Text,
  Flex,
  Heading,
  Stack,
  SimpleGrid,
  Box,
  chakra,
  Link,
  useColorModeValue,
  Button,
  HStack,
  Center,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { Layout, Seo } from '../components';
import { Hero } from '../components/home/';
import {
  schedhule,
  land,
  about,
  mission,
  aboutEndurance,
  remarks,
  studio,
  performances,
  speicalProjects,
  thankYou,
  team
} from '../components/constants/data';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-h5-audio-player/lib/styles.css';
import { NavLinks } from '../components/constants/routes';

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
      allGraphCmsAboutPage {
        nodes {
          content {
            html
            markdownNode {
              childMdx {
                body
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Home" />
      <Stack spacing={2}>
        <Hero />
        <SimpleGrid columns={[2, 4, 4]} gap={2}>
          {NavLinks.map(({ name, route }, i) => NavbarButton(name, route, i))}
        </SimpleGrid>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Schedule
        </Heading>
        {schedhule.map((item) => {
          return (
            <Heading
              as="h1"
              size="md"
              fontWeight="medium"
              textAlign={['center', 'center', 'left', 'left']}
            >
              {item.text}
            </Heading>
          );
        })}

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Land Acknowledgement
          </Heading>
          {land.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                marginBottom="10px"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            );
          })}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            About ARTSIDEOUT
          </Heading>
          {about.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                marginBottom="10px"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            );
          })}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Mission
          </Heading>
          {mission.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                marginBottom="10px"
                fontWeight="medium"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            );
          })}
        </div>

        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          About Endurance
        </Heading>
        {aboutEndurance.map((item) => {
          return (
            <Heading
              as="h1"
              size="md"
              fontWeight="medium"
              marginBottom="10px"
              textAlign={['center', 'center', 'left', 'left']}
            >
              {item.text}
            </Heading>
          );
        })}
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
          marginBottom="10px"
        >
          Remarks
        </Heading>
        <Stack spacing={4}>
          {remarks.map((item) => {
            return (
              <div>
                <Box
                  mx="auto"
                  px={8}
                  py={4}
                  rounded="lg"
                  shadow="lg"
                  bg={useColorModeValue('white', 'gray.800')}
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Link
                      px={3}
                      py={1}
                      bg="gray.600"
                      color="gray.100"
                      fontSize="sm"
                      fontWeight="700"
                      rounded="md"
                      _hover={{ bg: 'gray.500' }}
                    >
                      Remarks
                    </Link>
                  </Flex>

                  <Box mt={2}>
                    <Link
                      fontSize="2xl"
                      color={useColorModeValue('gray.700', 'white')}
                      fontWeight="700"
                      _hover={{
                        color: useColorModeValue('gray.600', 'gray.200'),
                        textDecor: 'underline'
                      }}
                    >
                      {item.name}
                    </Link>
                    <chakra.p
                      mt={2}
                      color={useColorModeValue('gray.600', 'gray.300')}
                    >
                      {item.remarks.map((remark) => {
                        return (
                          <Heading
                            as="h1"
                            size="md"
                            fontWeight="medium"
                            marginBottom="10px"
                            textAlign={['center', 'center', 'left', 'left']}
                          >
                            {remark.text}
                          </Heading>
                        );
                      })}
                    </chakra.p>
                  </Box>

                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mt={4}
                  >
                    <Flex alignItems="center">
                      <Link
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontWeight="700"
                        cursor="pointer"
                      >
                        {item.title}
                      </Link>
                    </Flex>
                  </Flex>
                </Box>
              </div>
            );
          })}
        </Stack>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Studio Artists Overview
          </Heading>
          {studio.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            );
          })}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Performance Artists Overview
          </Heading>
          {performances.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            );
          })}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Special Projects Overview
          </Heading>
          {speicalProjects.map((item) => {
            return (
              <div>
                <Heading
                  as="h1"
                  size="lg"
                  fontWeight="medium"
                  marginBottom="10px"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.title}
                </Heading>
                <Heading
                  as="h1"
                  size="md"
                  fontWeight="medium"
                  marginBottom="10px"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.text}
                </Heading>
              </div>
            );
          })}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Thank You
          </Heading>
          {thankYou.map((item) => {
            return (
              <Heading
                as="h1"
                size="md"
                fontWeight="medium"
                marginBottom="10px"
                textAlign={['center', 'center', 'left', 'left']}
              >
                {item.text}
              </Heading>
            );
          })}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom="10px"
          >
            Our Team
          </Heading>
          {team.map((item) => {
            return (
              <div>
                <Heading
                  as="h1"
                  size="lg"
                  marginBottom="10px"
                  fontWeight="bold"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {item.title}
                </Heading>

                {item.members.map((member) => {
                  return (
                    <Heading
                      as="h1"
                      size="md"
                      fontWeight="medium"
                      marginBottom="10px"
                      textAlign={['center', 'center', 'left', 'left']}
                    >
                      {member}
                    </Heading>
                  );
                })}
              </div>
            );
          })}
        </div>
      </Stack>
    </Layout>
  );
};

const NavbarButton = (name: string, route: string, key: number) => (
  <GatsbyLink to={route}>
    <Button
      key={key}
      rounded={'full'}
      isFullWidth={true}
      color="white"
      _hover={{
        color: 'white',
        bg: '#E81D77'
      }}
    >
      {name}
    </Button>
  </GatsbyLink>
);

export default IndexPage;
