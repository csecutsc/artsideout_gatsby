import * as React from 'react';
import { graphql, navigate, Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SimpleGrid, Text, Heading, Link, Flex } from '@chakra-ui/react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import PropTypes from 'prop-types';
import { ProfileData } from '../types/PrimaryTypes';
import { CreateFriendlyUrl } from '../helpers';

interface PropType {
  data: {
    artist: any;
  };
}

const ArtistTemplate = ({ data }: PropType) => {
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
        color="#E81D77"
        marginBottom="25px"
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
        marginBottom="25px"
        textAlign={['center', 'center', 'left', 'left']}
      >
        <MDXRenderer>
          {data.artist.description.markdownNode.childMdx.body}
        </MDXRenderer>
      </Heading>

      <Flex flexWrap="wrap">
        <Heading
          as={Text}
          size="md"
          fontWeight="bold"
          color="#E81D77"
          marginBottom="15px"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Links:
        </Heading>

        {data.artist.socialLink.map((link: any) => {
          return (
            <Link target="_blank" marginLeft="15px" href={link.url}>
              {link.label}
            </Link>
          );
        })}
      </Flex>

      {data.artist.installations.length > 0 ? (
        <div>
          <Heading
            as={Text}
            size="lg"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
          >
            Installations
          </Heading>

          <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
            {data.artist.installations.map((data: any, i: number) => (
              <Link
                as={GatsbyLink}
                to={`/installation/${CreateFriendlyUrl(
                  data.title,
                  data.remoteId
                )}`}
              >
                <GatsbyImage
                  key={i}
                  objectFit="cover"
                  image={
                    data.images.length > 0 ? data.images[0].gatsbyImageData : ''
                  }
                  alt={data.images.length > 0 ? data.images[0].altText : ''}
                />
              </Link>
            ))}
          </SimpleGrid>
        </div>
      ) : null}

      {data.artist.performances.length > 0 ? (
        <div>
          <Heading
            as={Text}
            size="lg"
            fontWeight="bold"
            color="#E81D77"
            textAlign={['center', 'center', 'left', 'left']}
          >
            Performances and Workshops
          </Heading>

          <SimpleGrid columns={[2, null, 3]} autoFlow="row dense">
            {data.artist.performances.map((data: any, i: number) => {
              if (data.performanceType == 'WORKSHOP') {
                return (
                  <Link
                    as={GatsbyLink}
                    to={`/workshop/${CreateFriendlyUrl('', data.remoteId)}`}
                  >
                    <GatsbyImage
                      key={i}
                      objectFit="cover"
                      image={
                        data.images.length > 0
                          ? data.images[0].gatsbyImageData
                          : ''
                      }
                      alt={data.images.length > 0 ? data.images[0].altText : ''}
                    />
                  </Link>
                );
              } else {
                return (
                  <Link
                    as={GatsbyLink}
                    to={`/performance/${CreateFriendlyUrl('', data.remoteId)}`}
                  >
                    <GatsbyImage
                      key={i}
                      objectFit="cover"
                      image={
                        data.images.length > 0 && data.images[0] && data.images[0].localFile.childImageSharp
                          ? data.images[0].localFile.childImageSharp
                            .gatsbyImageData
                          : ''
                      }
                      alt={data.images.length > 0 ? data.images[0].altText : ''}
                    />
                  </Link>
                );
              }
            })}
          </SimpleGrid>
        </div>
      ) : null}
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
      profileType
      installations {
        remoteId
        title
        images {
          gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
          altText
        }
      }
      performances {
        remoteId
        performanceType
        images {
          gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
          altText
        }
      }
      project {
        remoteId
        projectType
        displayImage {
          gatsbyImageData(width: 200, placeholder: BLURRED, quality: 20)
          localFile {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
          altText
        }
      }
      socialLink {
        ... on GraphCMS_Link {
          id
          url
          label
        }
      }
    }
  }
`;

ArtistTemplate.propTypes = {
  data: PropTypes.node.isRequired
};

export default ArtistTemplate;
