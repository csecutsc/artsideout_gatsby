import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Box, SimpleGrid, Stack, Text, Image, Img } from "@chakra-ui/react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
declare var process: {
  env: {
    UV_THREADPOOL_SIZE: number
  }
}
process.env.UV_THREADPOOL_SIZE = 1;
console.log(process.env.UV_THREADPOOL_SIZE);

interface InstallationData {
  allGraphCmsInstallation: {
    nodes: {
      description: string,
      id: string,
      images: []
    },
  };
}

const IndexPage = () => {
  const data: any = useStaticQuery(graphql`
  query GetAllInstallations {
    installations: allGraphCmsInstallation {
      nodes {
        description
        id
        images {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              quality:30
            )
          }
        }
      }
    }
`)
  console.log(data)
  return (<Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <SimpleGrid columns={[2, null, 3]} spacing={2}>
      {
        data.installations.nodes.map((data: any, i: number) => (
          <section className='gallery__section' key={i}>
            <h2 className='gallery__section-title'>{data.id}</h2>
            <ul className='gallery__images'>
              <GatsbyImage
                objectFit="cover"
                image={data.images[0] ? data.images[0].gatsbyImageData : ""}
                alt={data.images[0] ? data.images[0].altText : ""}
              />
            </ul>
          </section>
        ))
      }
    </SimpleGrid>
    <SimpleGrid columns={[2, null, 3]} spacing={2}>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </SimpleGrid>
    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
      <Profile />
      <Profile />
      <Profile />
    </Stack>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <Box p={8}>
      <Text fontSize="xl">Hello World</Text>
    </Box>
  </Layout>)
}

export default IndexPage
