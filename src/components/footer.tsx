import React, { ReactNode } from 'react';

import {
  Box,
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import { NavLinks, SocialLinks } from './constants/routes';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text color="pink.400" fontWeight={'700'} fontSize={'lg'} mb={2}>
                ARTSIDEOUT: ENDURANCE
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              © {new Date().getFullYear()} Computer Science Enrichment Club and
              ARTSIDEOUT. All rights reserved.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Studio Installations</ListHeader>
            <Link href={'#'}>Special Projects</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Interact with Us</ListHeader>
            {SocialLinks.map(({ name, route }) => (
              <Link key={name} href={route} target="_blank">
                {name}
              </Link>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
