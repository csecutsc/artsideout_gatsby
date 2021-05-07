import * as React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SimpleGrid, Text, Heading, HStack } from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import { InstallationType } from '../types/PrimaryTypes';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/'
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/'
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/'
//   }
// ];

interface PropType {
  data: {
    installation: InstallationType;
  };
}

const InstallationTemplate = ({ data }: PropType) => {
  if (data.installation === null) {
    navigate('/404');
    return null;
  }
  const images = data.installation.images.map((image: any, i: number) => ({
    original: 'image_path',
    srcSet: image.gatsbyImageData.images.sources[0].srcSet,
    originalAlt: image.altText ? image.altText : 'An Installation',
    sizes: 'max-height: 500px'
  }));
  console.log(data.installation.images);
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

      {/* <HStack spacing={8}>
        {data.installation.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="contain"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </HStack>

      <SimpleGrid columns={[2, null, 3]}>
        {data.installation.images.map((image: any, i: number) => (
          <GatsbyImage
            key={i}
            objectFit="cover"
            image={image ? image.gatsbyImageData : ''}
            alt={image ? image.altText : ''}
          />
        ))}
      </SimpleGrid> */}

      {images ? (
        <ImageGallery items={images} showIndex={true} lazyLoad={true} />
      ) : null}

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        <MDXRenderer>
          {data.installation.description.markdownNode.childMdx.body}
        </MDXRenderer>
      </Heading>
    </Layout>
  );
};

export const data: any = graphql`
  query GetInstallation($id: ID) {
    installation: graphCmsInstallation(remoteId: { eq: $id }) {
      remoteId
      title
      images {
        gatsbyImageData(width: 300, placeholder: BLURRED, quality: 70)
        altText
        url
        altText
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

InstallationTemplate.propTypes = {
  data: PropTypes.node.isRequired
};

export default InstallationTemplate;
