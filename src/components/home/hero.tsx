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
      height={{ base: '80vh', md: "50vh" }}
    >
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        px={8}
        mb={16}
        height={{ base: '80vh', md: "50vh" }}
      >
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            size="2xl"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
          >
            ARTSIDEOUT 2021: ENDURANCE
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="black"
            fontWeight="bold"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
            marginBottom={"20px"}
          >
            “ENDURANCE” is the ability to resist through and recover from
            adversity.
          </Heading>
          <GatsbyLink to="/installations">
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
          </GatsbyLink>
        </Stack>
        <Box w={{ base: '60%', sm: '50%', md: '40%' }} mb={{ base: 12, md: 0 }}>
          <StaticImage src="../../images/aso_logo.svg" alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
