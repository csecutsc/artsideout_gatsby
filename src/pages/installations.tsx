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
import Profile from '../components/profile';

interface InstallationData {
  allGraphCmsInstallation: {
    nodes: {
      description: string;
      id: string;
      images: [];
    };
  };
}

const InstallationPage = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllInstallations {
      installations: allGraphCmsInstallation {
        nodes {
          remoteId
          title
          images {
            gatsbyImageData(width: 300, placeholder: BLURRED, quality: 20)
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title="Installations" />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="pink.400"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Featured Collections
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
        Special Projects currated by the ARTSIDEOUT team.
      </Heading>

      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="pink.400"
        textAlign={['center', 'center', 'left', 'left']}
      >
        Installations
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
        In thinking of “Endurance”, artists create a diverse body of works.
        Click on an installation to learn more!
      </Heading>
      <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.installations.nodes.map((data: any, i: number) => (
          <Link to={`/installation/${data.remoteId}`}>
            <section className="gallery__section" key={i}>
              <h2 className="gallery__section-title">{data.title}</h2>
              <GatsbyImage
                objectFit="cover"
                image={data.images[0] ? data.images[0].gatsbyImageData : ''}
                alt={data.images[0] ? data.images[0].altText : ''}
              />
            </section>
          </Link>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default InstallationPage;
