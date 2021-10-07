import React from 'react';
import {
  Text,
  Heading,
  Divider,
  SimpleGrid,
  Box,
  chakra,
  Button,
  Flex,
  Link,
  useColorModeValue,
  HStack,
  Stack
} from '@chakra-ui/react';
import { Layout, Seo } from '../components';
import { graphql, useStaticQuery } from 'gatsby';
import { CreateFriendlyUrl } from '../helpers';
import { GatsbyImage } from 'gatsby-plugin-image';

const PerformancesPage = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllPerformances {
      activities: allGraphCmsActivity {
        nodes {
          description {
            html
          }
          endTime
          startTime
          title
          remoteId
          videoUrl
          zoomMeeting {
            meetingId
            meetingPass
            meetingUrl
          }
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
      }
      allGraphCmsProject {
        nodes {
          elements {
            ... on GraphCMS_Activity {
              remoteId
              title
            }
          }
        }
      }
    }
  `);

  const specialIds = data.allGraphCmsProject.nodes.map(
    (node: { elements: { remoteId: any }[] }) => node.elements[0].remoteId
  );

  data.activities.nodes = data.activities.nodes.filter(
    (meeting: {
      remoteId: string;
      startTime: string | number | Date;
      zoomMeeting: { meetingUrl: string };
    }) => {
      return !meeting.zoomMeeting && !specialIds.includes(meeting.remoteId);
    }
  );

  return (
    <Layout>
      <Seo title="Performances" />
      <Stack spacing={2}>
        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Performances
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} spacing={4}>
          {data.activities.nodes.map((event: any, i: number) => {
            return (
              <div>
                <Link
                  // color={useColorModeValue('gray.800', 'white')}
                  display="block"
                  href={`/performance/${CreateFriendlyUrl('', event.remoteId)}`}
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
                          fontSize="xl"
                          color="#E81D77"
                          fontWeight="bold"
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
                            event.images &&
                            event.images[0].localFile.childImageSharp
                              ? event.images[0].localFile.childImageSharp
                                  .gatsbyImageData
                              : ''
                          }
                          alt={
                            event.images ? event.images[0].altText : event.title
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
      </Stack>
      <Divider />
    </Layout>
  );
};

export default PerformancesPage;
