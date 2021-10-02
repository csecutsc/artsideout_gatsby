import React, { useState } from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
    SimpleGrid,
    Text,
    Heading,
    Center,
    Link,
    Input,
    InputGroup,
    InputLeftElement,
    Divider,
    Button
} from '@chakra-ui/react';

import { Layout, Seo } from '../components';
import { CreateFriendlyUrl } from '../helpers';
import { SearchIcon } from '@chakra-ui/icons';

const SpecialProjects = () => {
    const data: any = useStaticQuery(graphql`
    query GetSpecialProjects {
        allGraphCmsProject {
          nodes {
            title
            remoteId
            elements {
              ... on GraphCMS_Installation {
                remoteId
                images {
                  gatsbyImageData(width: 500, height: 500)
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 500)
                    }
                  }
                }
              }
            }
            profiles {
              name
            }
          }
        }
      }`);

    console.log(data.allGraphCmsProject.nodes)

    data.allGraphCmsProject.nodes = data.allGraphCmsProject.nodes.filter((node: { elements: {}[]; }) => Object.keys(node.elements[0]).length > 0)


    return (
        <Layout>
            <Seo title="Installations" />
            {/* <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Center>
              <SearchIcon color="gray.300" />
            </Center>
          }
        />
        <Input variant="filled" placeholder="Search Installations" size="lg" />
      </InputGroup> */}

            <Heading
                as="h1"
                size="xl"
                fontWeight="bold"
                color="#E81D77"
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
                Projects currated by the ARTSIDEOUT team.
            </Heading>
            <Divider />
            {/* <Heading
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
      </Heading> */}
            <SimpleGrid columns={[2, null, 4]} spacing={2}>
                {data.allGraphCmsProject.nodes.map((data: any, i: number) => {
                    console.log(data.elements[0])

                    if (Object.keys(data.elements[0]).length === 0) {
                        return (
                            <div />
                        )
                    }

                    return (
                        <Center>
                            <Link
                                as={GatsbyLink}
                                to={`/installation/${CreateFriendlyUrl(
                                    data.title,
                                    data.elements[0].remoteId
                                )}`}
                            >
                                <GatsbyImage
                                    objectFit="cover"
                                    image={
                                        data.elements[0].images[0] && data.elements[0].images[0].localFile.childImageSharp
                                            ? data.elements[0].images[0].localFile.childImageSharp.gatsbyImageData
                                            : ''
                                    }
                                    alt={data.elements[0].images[0] ? data.elements[0].images[0].altText : data.title}
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
                    )
                })}

            </SimpleGrid>
        </Layout>
    );
};

export default SpecialProjects;
