import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
// Assets
import illustration from "../assets/house.jpg";

import DefaultAuth from "./Default";

function Forgotpassword() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");

  const brandStars = useColorModeValue("brand.500", "brand.400");

  // State for email input value and validation
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  // Validate email input
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setEmailError(!isValid);
    return isValid;
  };

  // Handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  var errors = []
  // Handle form submission
  const handleSubmit = () => {
    if (validateEmail()) {
      errors.push(`/Reset?email=${email}`);
    }
  };

  return (
    <DefaultAuth
      illustrationBackground={illustration}
      image={illustration}
    >
      <Flex
        margin="20px"
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto" margin={"30px"} padding={"40px"}>
          <Heading color={"#black"} fontSize="36px" mb="10px">
            Forgot Password
          </Heading>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              ms={{ base: "0px", md: "0px" }}
              type="email"
              placeholder="mail@simmmple.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              value={email}
              onChange={handleEmailChange}
              isInvalid={emailError}
            />
            {emailError && (
              <Text fontSize="sm" color="red.500">
                Please enter a valid email.
              </Text>
            )}
            <Button
              color={"white"}
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              background={"#219EBC"}
              onClick={handleSubmit}
              disabled={!email || emailError}
            >
              Forgot Password
            </Button>
            <NavLink to="/signin">
              <Text fontSize="sm">Remembered your password? Login</Text>
            </NavLink>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default Forgotpassword;