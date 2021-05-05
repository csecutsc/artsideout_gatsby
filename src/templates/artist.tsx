import * as React from 'react';
import { graphql, Link, useStaticQuery, navigate } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Img,
  Heading,
  Container
} from '@chakra-ui/react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';

const ArtistTemplate = ({ data }) => {
  console.log(data.artist);
  if (data.artist === null) {
    navigate('/404');
    return null;
  }
  return (
    <Layout>
      <Seo title={data.artist.name} />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="pink.400"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.artist.name}
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
        <MDXRenderer as={Container}>
          {data.artist.description.markdownNode.childMdx.body}
        </MDXRenderer>
      </Heading>

      <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.artist.installations.map((data: any, i: number) =>
          data.images.map((image: any, i: number) => (
            <GatsbyImage
              key={i}
              objectFit="cover"
              image={image ? image.gatsbyImageData : ''}
              alt={image ? image.altText : ''}
            />
          ))
        )}
      </SimpleGrid>

      {/* <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.artist.performances.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="cover"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </SimpleGrid> */}

      {/* <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.artist.project.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="cover"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </SimpleGrid> */}
    </Layout>
  );
};

export const data: any = graphql`
  query GetProfile($id: ID) {
    artist: graphCmsProfile(remoteId: { eq: $id }) {
      remoteId
      name
      description {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      type
      installations {
        remoteId
        title
        images {
          gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
          altText
        }
      }
      performances {
        remoteId
        images {
          gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
          altText
        }
      }
    }
  }
`;

export default ArtistTemplate;
