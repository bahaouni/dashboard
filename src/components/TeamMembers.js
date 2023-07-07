import {    Box, Flex,Avatar ,Text , Heading , IconButton,  Card  } from '@chakra-ui/react'
const TeamMembers = () => {
  return (
<Card maxW='md' margin={"10px"}>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo'  />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        
      />
      
    </Flex>
    </Card>  )
}

export default TeamMembers