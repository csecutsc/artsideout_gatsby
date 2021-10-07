import * as React from 'react';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  SimpleGrid,
  Text,
  Heading,
  HStack,
  Stack,
  Divider,
  Box,
  Grid,
  GridItem,
  Link,
  AspectRatio
} from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import { ActivityData } from '../types/PrimaryTypes';
import { CreateFriendlyUrl } from '../helpers';

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
    performance: any;
  };
}

const PerformanceTemplate = ({ data }: PropType) => {
  if (data.performance === null) {
    navigate('/404');
    return null;
  }
  return (
    <Layout>
      <Seo title={data.performance.title} />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.performance.title}
      </Heading>

      <Heading
        as={Text}
        size="lg"
        fontWeight="bold"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.performance.profiles.length > 0 && (
          <Link
            target="_blank"
            href={`/artist/${CreateFriendlyUrl(
              data.performance.profiles[0].name,
              data.performance.profiles[0].remoteId
            )}`}
            fontWeight="bold"
          >
            {data.performance.profiles[0].name}
          </Link>
        )}
      </Heading>

      <SimpleGrid columns={[1, 2, 2]}>
        <Box>
          <Stack direction="column" p={4}>
            <Divider orientation="vertical" />
            <AspectRatio ratio={16 / 9}>
              <iframe src={data.performance.videoUrl} />
            </AspectRatio>

          </Stack>
          <Heading
            as={Text}
            size="sm"
            fontWeight="normal"
            textAlign={['center', 'center', 'center', 'center']}
          >Click the top right of the video if it doesn't load</Heading>
        </Box>
        <Box>
          <Stack direction="column" p={4}>
            <Divider orientation="vertical" />
            <MDXRenderer>
              {data.performance.description.markdownNode.childMdx.body}
            </MDXRenderer>
          </Stack>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export const data: any = graphql`
  query getPerformance($id: ID) {
    performance: graphCmsActivity(remoteId: { eq: $id }) {
      remoteId
      title
      images {
        gatsbyImageData(width: 300, placeholder: BLURRED, quality: 70)
        localFile {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        altText
        url
      }
      description {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      videoUrl
      profiles {
        name
        remoteId
      }
    }
  }
`;

PerformanceTemplate.propTypes = {
  data: PropTypes.node.isRequired
};

export default PerformanceTemplate;
