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
import React from 'react';
import { Text, Heading } from '@chakra-ui/react';

import { Layout, Seo } from '../components';

const MapPage = () => {
  return (
    <Layout>
      <Seo title="Map" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Working on it
      </Heading>
    </Layout>
  );
};

export default MapPage;
