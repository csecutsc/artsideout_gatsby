import React from 'react';
import { Text, Heading, Divider, SimpleGrid, Box, chakra, Button, Flex, Link, useColorModeValue } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Card } from '../components/performances';
import { graphql, useStaticQuery } from 'gatsby';
import { CreateFriendlyUrl } from '../helpers';

const PerformancesPage = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllPerformances {
      activities: allGraphCmsActivity {
          nodes{
            description {
              html
            }
            endTime
            startTime
            title
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
          }
      }
    }
  `);

  const upcoming = data.activities.nodes.filter((meeting: { startTime: string | number | Date; zoomMeeting: { meetingUrl: string } }) => {
    return new Date(meeting.startTime) > new Date() && meeting.zoomMeeting
  })

  const past = data.activities.nodes.filter((meeting: { startTime: string | number | Date; zoomMeeting: { meetingUrl: string } }) => {
    return new Date(meeting.startTime) < new Date()
  });

  console.log(upcoming)


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
        Upcoming Performances
      </Heading>
      <SimpleGrid columns={[1, 1, 3]} spacing={2}>
        {upcoming.map((event: { startTime: Date; endTime: Date; title: string; zoomMeeting: { meetingUrl: string }; profiles: { name: string, remoteId: any; }[]; }) => {
          return (
            <Box width="400px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="sm"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {new Date(event.startTime).toDateString()}
                  </chakra.span>
                  <Link
                    display="block"
                    // color={useColorModeValue('gray.800', 'white')}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: 'gray.600', textDecor: 'underline' }}
                  >
                    {event.title}
                  </Link>
                </Box>

                <Box mt={4}>
                  <Flex dir="row" alignItems="center" justify="space-between">
                    <Button>
                      <Link href={event.zoomMeeting.meetingUrl}>
                        Join Meeting
                      </Link>
                    </Button>
                    <Link href={CreateFriendlyUrl(event.profiles[0].name, event.profiles[0].remoteId)} fontWeight="bold">
                      {event.profiles[0].name}
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>

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
      <SimpleGrid columns={[1, 1, 3]} spacing={2}>
        {past.map((event: { startTime: Date; endTime: Date; title: string; videoUrl: string; zoomMeeting: { meetingUrl: string }; profiles: { name: string, remoteId: any; }[]; }) => {
          return (
            <Box width="400px" mx="auto" rounded="lg" shadow="md" maxW="2xl">
              <Box p={6}>
                <Box>
                  <chakra.span
                    fontSize="sm"
                    color={useColorModeValue('gray.600', 'gray.300')}
                  >
                    {new Date(event.startTime).toDateString()}
                  </chakra.span>
                  <Link
                    display="block"
                    // color={useColorModeValue('gray.800', 'white')}
                    fontWeight="bold"
                    fontSize="2xl"
                    mt={2}
                    _hover={{ color: 'gray.600', textDecor: 'underline' }}
                  >
                    {event.title}
                  </Link>
                </Box>

                <Box mt={4}>
                  <Flex dir="row" alignItems="center" justify="space-between">
                    {event.videoUrl ?
                      <Button>
                        <Link href={event.videoUrl}>
                          Recording
                        </Link>
                      </Button>
                      :
                      <div />
                    }
                    <Link href={CreateFriendlyUrl(event.profiles[0].name, event.profiles[0].remoteId)} fontWeight="bold">
                      {event.profiles[0].name}
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>
    </Layout>
  );
};

export default PerformancesPage;
