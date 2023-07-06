import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Box, Container, Grid } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const User = () => {
  return (
    <Container maxW={"full"} p="4" fontSize={"40px"}>
      Users
      <Box rounded="lg" boxShadow="base" p="4" backgroundColor={"white"}>
        <Grid templateColumns="1fr max-content" gap={2} alignItems="center" display={'flex'}>
          <FormControl p={""}>
            <Input type="email" />
          </FormControl>
          <Button
            leftIcon={<AiOutlineSearch />}
            colorScheme="teal"
            variant="outline"
            maxW={"300px"}
            minW="150px"
          >
            Call us
          </Button>
        </Grid>
      </Box>
    </Container>
  );
};

export default User;
