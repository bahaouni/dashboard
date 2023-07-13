import {  Box, Button, Td, Tr } from '@chakra-ui/react';
import { AiFillDelete } from 'react-icons/ai';
import { CheckIcon } from '@chakra-ui/icons';
import imge from '../assets/house.jpg';
import React, { useState } from 'react'; // Import useState hook

const ImageCell = (props) => {
  const [showImageInfo, setShowImageInfo] = useState(false);

  return (
    <Td
      onMouseEnter={() => setShowImageInfo(true)}
      onMouseLeave={() => setShowImageInfo(false)}
      w="40px"
      h="40px"
      position="relative"
    >
      <Box className="card-profile-image">
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
          <img alt="..." className="rounded-circle" src={imge} />
        </a>
      </Box>

      {/* Render image info component when showImageInfo is true */}
      {showImageInfo && (
        <Box 
        marginLeft="150px"
          position="absolute"
          bottom="-80px"
          left="50%"
          transform="translateX(-50%)"
          bg="white"
          p="4"
          borderRadius="md"
          boxShadow="md"
          zIndex="1"
        >
          <Box mb="2">
            <img alt="large" src={imge} width="200" />
          </Box>
          <Box fontSize="sm" fontWeight="semibold">
            Image Name: {props.name}
          </Box>
          <Box fontSize="sm">Image Description: Cette maison spacieuse et lumineuse .
{props.description}</Box>
        </Box>
      )}
    </Td>
  );
};

const Row = (props) => {
  return (
    <Tr>
      <ImageCell name={props.name} description={props.description} />
      <Td>{props.name}</Td>
      <Td>{props.email}</Td>
      <Td>{props.age}</Td>
      <Td>{props.country}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button colorScheme={'green'}>
            <CheckIcon />
          </Button>
          <Button colorScheme={'red'}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default Row;