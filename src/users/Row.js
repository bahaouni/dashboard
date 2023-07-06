import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';

import React from 'react'

const Row = () => {
  return (
    <Tr>
      <Td>
        <Avatar  />
      </Td>
      <Td>xd</Td>
      <Td>xd</Td>
      <Td>xd</Td>
      <Td>xd</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={'blue'}>
           
          </Button>
          <Button colorScheme={'red'} >
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  )
}

export default Row