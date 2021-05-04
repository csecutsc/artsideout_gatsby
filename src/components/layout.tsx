/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Text } from "@chakra-ui/react"
import Header from "./navbar"
import Footer from "./footer"

interface LayoutProps {
  children?: any
}

interface LayoutData {
  site: {
    siteMetadata: {
      title: string;
    },
  };
}

const Layout = ({ children }: LayoutProps) => {
  const data: LayoutData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <Container maxW={'7xl'} flex={'1 0 auto'} py={8} mt={5}>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
