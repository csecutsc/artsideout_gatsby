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

const InstallationTemplate = ({ data }) => {
  console.log(data);
  if (data.installation === null) {
    navigate('/404');
    return null;
  }
  return (
    <Layout>
      <Seo title={data.installation.title} />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="pink.400"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.installation.title}
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
        {/* {data.installation.nodes.markdownNode.childMdx.body} */}
        <MDXRenderer as={Container}>
          {data.installation.description.markdownNode.childMdx.body}
        </MDXRenderer>
      </Heading>

      <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
        {data.installation.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="cover"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </SimpleGrid>
    </Layout>
  );
};

export const data: any = graphql`
  query GetInstallation($id: ID) {
    installation: graphCmsInstallation(remoteId: { eq: $id }) {
      remoteId
      title
      images {
        gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
      }
      description {
        markdownNode {
          childMdx {
            body
          }
        }
      }
    }
  }
`;

export default InstallationTemplate;
