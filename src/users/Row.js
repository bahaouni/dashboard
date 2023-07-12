import { Avatar, Box, Button, Td, Tr } from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
 
import React from 'react'
import DrawerExample   from './DrawerExemple';
import { useState } from 'react';
const Row = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddUser = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

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
          <Button colorScheme={'blue'} onClick={handleAddUser}>
          <AiFillEdit />
         
          </Button>
          <Button colorScheme={'red'}   >
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
      <DrawerExample isOpen={isDrawerOpen} onClose={handleDrawerClose} />

    </Tr>
  )
}

export default Row