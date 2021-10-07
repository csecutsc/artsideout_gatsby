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
  Link
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
    workshop: any;
  };
}

const WorkshopTemplate = ({ data }: PropType) => {
  if (data.workshop === null) {
    navigate('/404');
    return null;
  }
  return (
    <Layout>
      <Seo title={data.workshop.title} />
      <Heading
        as={Text}
        size="xl"
        fontWeight="bold"
        color="#E81D77"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {data.workshop.title}
      </Heading>

      <Heading
        as={Text}
        size="md"
        textAlign={['center', 'center', 'left', 'left']}
      >
        <Link
          target="_blank"
          href={`/artist/${CreateFriendlyUrl(
            data.workshop.profiles[0].name,
            data.workshop.profiles[0].remoteId
          )}`}
        >
          {data.workshop.profiles[0].name}
        </Link>
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Box>
            <Stack direction="column">
              <Divider orientation="vertical" />
              <GatsbyImage
                image={
                  data.workshop.images[0] &&
                  data.workshop.images[0].localFile.childImageSharp
                    ? data.workshop.images[0].localFile.childImageSharp
                        .gatsbyImageData
                    : ''
                }
                alt={
                  data.workshop.images[0]
                    ? data.workshop.images[0].altText
                    : data.workshop.title
                }
              />
            </Stack>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Stack direction="column">
              <Divider orientation="vertical" />
              <MDXRenderer>
                {data.workshop.description.markdownNode.childMdx.body}
              </MDXRenderer>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export const data: any = graphql`
  query getWorkshop($id: ID) {
    workshop: graphCmsActivity(remoteId: { eq: $id }) {
      remoteId
      title
      images {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
              quality: 70
            )
          }
        }
      }
      description {
        markdownNode {
          childMdx {
            body
          }
        }
      }
      profiles {
        name
        remoteId
      }
    }
  }
`;

WorkshopTemplate.propTypes = {
  data: PropTypes.node.isRequired
};

export default WorkshopTemplate;
