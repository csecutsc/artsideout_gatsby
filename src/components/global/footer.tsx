import React, { ReactNode } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import {
  Box,
  Center,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import {
  FestivalLinks,
  AdditionalLinks,
  SocialLinks
} from '../constants/routes';

import { Link as GatsbyLink } from 'gatsby';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <Center paddingBottom="20px">
          <ReactAudioPlayer
            src="http://docs.google.com/uc?export=open&id=1G7f19wJ2j_6qw-BbzdxAucoszDGUyACF"
            autoPlay
            controls
            volume={0.2}
          />
        </Center>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text color="#E81D77" fontWeight={'700'} fontSize={'lg'} mb={2}>
                ARTSIDEOUT: ENDURANCE
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Computer Science Enrichment Club and
              ARTSIDEOUT. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Festival</ListHeader>
            {FestivalLinks.map(({ name, route }) => (
              <Link as={GatsbyLink} key={name} to={route}>
                {name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Other Goodies</ListHeader>
            {AdditionalLinks.map(({ name, route }) => (
              <Link as={GatsbyLink} key={name} to={route}>
                {name}
              </Link>
            ))}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Interact with Us</ListHeader>
            {SocialLinks.map(({ name, route }) => (
              <Link key={name} href={route} target="_blank" rel="noopener">
                {name}
              </Link>
            ))}
          </Stack>
        </SimpleGrid>

      </Container>
    </Box>
  );
};

export default Footer;
