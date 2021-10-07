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
  Stack
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { Card } from '../components/performances';
import { graphql, useStaticQuery } from 'gatsby';
import { CreateFriendlyUrl } from '../helpers';
import { GatsbyImage } from 'gatsby-plugin-image';

const Workshops = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllWorkshops {
      activities: allGraphCmsActivity(
        sort: { order: ASC, fields: startTime }
        filter: { performanceType: { eq: WORKSHOPS } }
      ) {
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

  var current = new Date(Date.now());
  const timeNow = new Date(current.getTime());

  const pastWorkshops = data.activities.nodes.filter((meeting: any) => {
    if (new Date(meeting.endTime) <= timeNow) {
      return meeting;
    }
  });

  const upcomingWorkshops = data.activities.nodes.filter((meeting: any) => {
    if (new Date(meeting.startTime) >= timeNow) {
      return meeting;
    }
  });

  const currentWorkshops = data.activities.nodes.filter((meeting: any) => {
    if (
      new Date(meeting.startTime) <= timeNow &&
      new Date(meeting.endTime) >= timeNow
    ) {
      return meeting;
    }
  });

  return (
    <Layout>
      <Seo title="Workshops" />
      <Stack spacing={2}>
        <Heading
          as={Text}
          size="xl"
          fontWeight="bold"
          color="#E81D77"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Workshops
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
          A series of art workshops taking place all day from 11 AM - 10 PM!
        </Heading>
        {currentWorkshops.length > 0 && (
          <div>
            <Heading
              as={Text}
              size="xl"
              fontWeight="bold"
              color="#E81D77"
              textAlign={['center', 'center', 'left', 'left']}
            >
              Happening Now!
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={2}>
              {currentWorkshops.map((event: any, i: number) => {
                return workShopCard(event, i);
              })}
            </SimpleGrid>
          </div>
        )}
        {upcomingWorkshops.length > 0 && (
          <div>
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
              {upcomingWorkshops.map((event: any, i: number) => {
                return workShopCard(event, i);
              })}
            </SimpleGrid>
          </div>
        )}

        {pastWorkshops.length > 0 && (
          <div>
            <Heading
              as={Text}
              size="xl"
              fontWeight="bold"
              color="#E81D77"
              textAlign={['center', 'center', 'left', 'left']}
            >
              Past Workshops
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing={2}>
              {pastWorkshops.map((event: any, i: number) => {
                return workShopCard(event, i);
              })}
            </SimpleGrid>
          </div>
        )}
      </Stack>
    </Layout>
  );
};

function workShopCard(event: any, i: number) {
  return (
    <Box
      height="auto"
      width="auto"
      mx="auto"
      rounded="lg"
      shadow="md"
      maxW="2xl"
      key={i}
    >
      <Link
        display="block"
        // color={useColorModeValue('gray.800', 'white')}
        fontWeight="bold"
        fontSize="xl"
        mt={2}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('pink.100', 'pink.300')
        }}
        href={`/workshop/${CreateFriendlyUrl('', event.remoteId)}`}
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
                event.images[0] && event.images[0].localFile.childImageSharp
                  ? event.images[0].localFile.childImageSharp.gatsbyImageData
                  : ''
              }
              alt={event.images[0] ? event.images[0].altText : event.title}
            />
          </Box>
          <Box>
            {event.zoomMeeting && (
              <div>
                <chakra.span
                  fontSize="md"
                  color={useColorModeValue('gray.600', 'gray.300')}
                  fontWeight="bold"
                >
                  {`Meeting ID: ${event.zoomMeeting.meetingId}`}
                </chakra.span>
                <br />
                <chakra.span
                  fontSize="md"
                  color={useColorModeValue('gray.600', 'gray.300')}
                  fontWeight="bold"
                >
                  {`Passcode: ${event.zoomMeeting.meetingPass}`}
                </chakra.span>
              </div>
            )}
          </Box>

          <Box mt={4}>
            <Flex dir="row" alignItems="center" justify="space-between">
              {event.zoomMeeting && (
                <Button>
                  <Link target="_blank" href={event.zoomMeeting.meetingUrl}>
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
      </Link>
    </Box>
  );
}

export default Workshops;
