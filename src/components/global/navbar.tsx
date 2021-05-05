import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
  HStack,
  useDisclosure,
  IconButton,
  Container,
  Fade,
  Heading
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { NavLinks } from '../constants/routes';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container maxW={'7xl'} py={0}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          p={8}
        >
          <Flex align="center">
            <Heading
              as={Text}
              size="lg"
              fontWeight="bold"
              color="pink.400"
              textAlign={['center', 'center', 'left', 'left']}
            >
              ARTSIDEOUT
            </Heading>
          </Flex>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
          >
            <Flex
              align={['center', 'center', 'center', 'center']}
              justify={['center', 'space-between', 'flex-end', 'flex-end']}
              direction={['column', 'row', 'row', 'row']}
              pt={[4, 4, 0, 0]}
            >
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {NavLinks.map(({ name, route }) => (
                  <GatsbyLink to={route}>
                    <Button
                      variant="ghost"
                      rounded={'full'}
                      size="sm"
                      color={useColorModeValue('gray.700', 'gray.200')}
                      _hover={{
                        color: 'white',
                        bg: 'pink.400'
                      }}
                    >
                      {name}
                    </Button>
                  </GatsbyLink>
                ))}
                <Button rounded={'full'} size="sm" onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </HStack>
            </Flex>
            {isOpen ? (
              <Fade in={isOpen}>
                <Box pb={4}>
                  <Stack as={'nav'} spacing={4}>
                    {NavLinks.map(({ name, route }) => (
                      <GatsbyLink to={route}>
                        <Button
                          variant="ghost"
                          rounded={'full'}
                          size="sm"
                          color={useColorModeValue('gray.700', 'gray.200')}
                          _hover={{
                            color: 'white',
                            bg: 'pink.400'
                          }}
                        >
                          {name}
                        </Button>
                      </GatsbyLink>
                    ))}
                  </Stack>
                </Box>
              </Fade>
            ) : null}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
