// import React, { useState, useCallback } from 'react';

// export default function GeolocationPage() {
//   return (
//     <div>
//       <h1>Geolocation</h1>
//       <p>Your location is:</p>
//       <p>Latitude:</p>
//       <p>Longitude:</p>

//       <button>Get Current Location</button>
//     </div>
//   );
// }
import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Img,
  Heading
} from '@chakra-ui/react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const MapPage = () => {
  return (
    <Layout>
      <Seo title="Map" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="pink.400"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Working on it
      </Heading>
    </Layout>
  );
};

export default MapPage;
