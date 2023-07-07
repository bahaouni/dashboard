import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import {CheckIcon} from  '@chakra-ui/icons'

import React from 'react'
const Row = (props) => {
  return (
    <Tr>
      <Td>
        <Avatar name={props.name} />
      </Td>
      <Td>{props.name}</Td>
      <Td>{props.email}</Td>
      <Td>{props.age}</Td>
      <Td>{props.country}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={'green'} >
          <CheckIcon />
         
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