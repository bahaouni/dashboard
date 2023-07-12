import {
    Box,
    Button,
    Container,
    Input,
    Table,
    TableContainer,
    Tbody,
    
    Text,
    Th,
    Thead,
    Tr,
  } from '@chakra-ui/react';
  import { FormControl } from '@chakra-ui/react';
  import { AiOutlineSearch } from 'react-icons/ai';
  import Row from './Row';

  
  function Annonces() {
    
    
    return (
      <div className="xd">
        <Container maxW={'full'} p="4" fontSize={'18px'}>
          <Box rounded="lg"  p="4"  background={"#F7FAFC"} boxShadow= "0 2px 4px rgba(0, 0, 0, 0.1)">
            <Box mt="2" gap={'2'} mb="4" display={'flex'} background={"#fff"}>
              <FormControl>
                <Input type="text"  placeholder='search post'/>
              </FormControl>
              <Button
                leftIcon={<AiOutlineSearch />}
                colorScheme="teal"
                variant="outline"
                maxW="300px"
                minW="150px"
                
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box mt="5" rounded={'lg'}  boxShadow= "0 2px 4px rgba(0, 0, 0, 0.1)">
            <Box p="4" display={'flex'} justifyContent="space-between">
              <Text fontSize="xl" fontWeight="bold">
                List Posts
              </Text>
             
            </Box>
            <TableContainer background={"#F7FAFC"}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Avatar</Th>
                    <Th>Fullname</Th>
                    <Th>Email</Th>
                    <Th>Age</Th>
                    <Th>Country</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                 <Row name={"baha"} email={"morgen12@gmail.com"} age ={"21"}  country={"tunisia"}/>
                 <Row name={"willis"} email={"morgen12@gmail.com"} age ={"30"}  country={"canada"}/>
                 <Row name={"milani"} email={"milani@gmail.com"} age ={"35"}  country={"france"}/>
                 <Row name={"azer"} email={"mazer12@gmail.com"} age ={"71"}  country={"new york"}/>
                 <Row name={"baha"} email={"morgen12@gmail.com"} age ={"21"}  country={"tunisia"}/>
                 <Row name={"baha"} email={"morgen12@gmail.com"} age ={"21"}  country={"tunisia"}/>
                 <Row name={"baha"} email={"morgen12@gmail.com"} age ={"21"}  country={"tunisia"}/>
  
                  
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
       
        </Container>
      </div> 
       );
      }
    export default Annonces