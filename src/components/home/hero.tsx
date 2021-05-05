import React from 'react';
import { Box, Button, Flex, Heading, Link, Stack } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import BackgroundHero from '../../images/hero_bg.svg';

const Hero = () => {
  return (
    <Box
      style={{
        borderRadius: '30px',
        backgroundImage: `url(${BackgroundHero})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        backgroundPosition: 'center'
      }}
      height={'50vh'}
    >
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        px={8}
        mb={16}
        height={'50vh'}
      >
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            size="2xl"
            fontWeight="bold"
            color="pink.400"
            textAlign={['center', 'center', 'left', 'left']}
          >
            ARTSIDEOUT 2021: ENDURANCE
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
            “ENDURANCE” is the ability to resist through and recover from
            adversity.
          </Heading>
          <Link as={GatsbyLink} to="/installations">
            <Button
              colorScheme="primary"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              View Installations
            </Button>
          </Link>
        </Stack>
        <Box w={{ base: '60%', sm: '50%', md: '40%' }} mb={{ base: 12, md: 0 }}>
          <StaticImage src="../../images/aso_logo.jpg" alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
