import {
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

export default function Card(
  startTime: string,
  endTime: string,
  title: string
) {
  return (
    <Box mx="auto" rounded="lg" shadow="md" maxW="2xl">
      <Box p={6}>
        <Box>
          <chakra.span
            mx={1}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            {startTime}
          </chakra.span>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
          >
            {title}
          </Link>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Link mx={2} fontWeight="bold">
              Jone Doe
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
