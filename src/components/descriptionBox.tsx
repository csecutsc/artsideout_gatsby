import { Divider, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

interface DescriptionProps {
  description?: string;
}

const DescriptionBox = ({ description }: DescriptionProps) => {
  return (
    <Stack direction="row" h="100px" p={4}>
      <Divider orientation="vertical" />
      <Text>{description}</Text>
    </Stack>
  );
};

DescriptionBox.propTypes = {
  description: PropTypes.node.isRequired
};

export default DescriptionBox;
