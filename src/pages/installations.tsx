import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SimpleGrid, Text, Heading, Center, Link } from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { CreateFriendlyUrl } from '../helpers';

const InstallationPage = () => {
  const data: any = useStaticQuery(graphql`
    query GetAllInstallations {
      installations: allGraphCmsInstallation {
        nodes {
          remoteId
          title
          images {
            gatsbyImageData(width: 250, placeholder: BLURRED, quality: 20)
          }
          profiles {
            name
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
      <SimpleGrid columns={[2, null, 4]} spacing={2}>
        {data.installations.nodes.map((data: any, i: number) => (
          <Center>
            <Link
              as={GatsbyLink}
              to={`/installation/${CreateFriendlyUrl(
                data.title,
                data.remoteId
              )}`}
            >
              <GatsbyImage
                objectFit="cover"
                image={data.images[0] ? data.images[0].gatsbyImageData : ''}
                alt={data.images[0] ? data.images[0].altText : data.title}
              />
              <Heading
                as="h3"
                size="md"
                color="primary.800"
                fontWeight="bold"
                lineHeight={1.5}
                textAlign={['center', 'center', 'left', 'left']}
              >
                {data.title}
              </Heading>
              {data.profiles.map((data: any, i: number) => (
                <Text
                  size="md"
                  color="primary.800"
                  textAlign={['center', 'center', 'left', 'left']}
                >
                  {data.name}
                </Text>
              ))}
            </Link>
          </Center>
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export default InstallationPage;
