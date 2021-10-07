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
  useColorModeValue
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Card } from '../components/performances';
import { graphql, useStaticQuery } from 'gatsby';
import { CreateFriendlyUrl } from '../helpers';
import { GatsbyImage } from 'gatsby-plugin-image';

const Workshops = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllWorkshops {
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
          images {
            gatsbyImageData(width: 500, height: 500)
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          zoomMeeting {
            meetingId
            meetingPass
            meetingUrl
          }
          profiles {
            name
            remoteId
          }
        }
      }
    }
  `);

  const upcoming = data.activities.nodes.filter(
    (meeting: {
      startTime: string | number | Date;
      zoomMeeting: { meetingUrl: string };
    }) => {
      return meeting.zoomMeeting;
    }
  );

  return (
    <Layout>
      <Seo title="Workshops" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Upcoming Workshops
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={2}>
        {upcoming.map((event: any, i: number) => {
          return (
            <Box
              height="auto"
              width="auto"
              mx="auto"
              rounded="lg"
              shadow="md"
              maxW="2xl"
            >
              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="md"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {new Date(event.startTime).toLocaleTimeString([], {
                      timeZoneName: 'short',
                      hour: '2-digit',
                      minute: '2-digit'
                    }) +
                      ' - ' +
                      new Date(event.endTime).toLocaleTimeString([], {
                        timeZoneName: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                  </chakra.span>
                  <Link
                    display="block"
                    // color={useColorModeValue('gray.800', 'white')}
                    fontWeight="bold"
                    fontSize="xl"
                    mt={2}
                    _hover={{ color: 'gray.600', textDecor: 'underline' }}
                    href={`/workshop/${CreateFriendlyUrl('', event.remoteId)}`}
                  >
                    {event.title}
                  </Link>
                  <GatsbyImage
                    objectFit="cover"
                    image={
                      event.images[0] &&
                      event.images[0].localFile.childImageSharp
                        ? event.images[0].localFile.childImageSharp
                            .gatsbyImageData
                        : ''
                    }
                    alt={
                      event.images[0] ? event.images[0].altText : event.title
                    }
                  />
                </Box>
                <Box>
                  {event.zoomMeeting && (
                    <chakra.span
                      fontSize="md"
                      color={useColorModeValue('gray.600', 'gray.300')}
                    >
                      {event.zoomMeeting.meetingPass}
                    </chakra.span>
                  )}
                </Box>

                <Box mt={4}>
                  <Flex dir="row" alignItems="center" justify="space-between">
                    {event.zoomMeeting && (
                      <Button>
                        <Link
                          target="_blank"
                          href={event.zoomMeeting.meetingUrl}
                        >
                          Join Meeting
                        </Link>
                      </Button>
                    )}
                    {event.profiles.length > 0 && (
                      <Link
                        target="_blank"
                        href={`/artist/${CreateFriendlyUrl(
                          event.profiles[0].name,
                          event.profiles[0].remoteId
                        )}`}
                        fontWeight="bold"
                      >
                        {event.profiles[0].name}
                      </Link>
                    )}
                  </Flex>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default Workshops;
