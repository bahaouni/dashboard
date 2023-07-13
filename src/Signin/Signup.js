import React from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
// Custom components
// Assets
import illustration from "../assets/house.jpg";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import DefaultAuth from "./Default";
import { useForm } from "react-hook-form";

function Signup() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <DefaultAuth
      illustrationBackground={illustration}
      image={illustration}
    >
      <Flex
        margin="10px"
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
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign Up
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={Boolean(errors.firstName)}>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                First Name<Text color={brandStars}></Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="John"
                mb="24px"
                fontWeight="500"
                size="lg"
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
                aria-describedby={errors.firstName ? "firstName-error" : ""}
              />
              <FormErrorMessage id="firstName-error">
                {errors.firstName?.type === "required" && "First name is required"}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.lastName)}>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Last Name<Text color={brandStars}></Text>
              </FormLabel>
              <Input
                isRequired={true}
                variant="auth"
                fontSize="sm"
                ms={{ base: "0px", md: "0px" }}
                type="text"
                placeholder="Doe"
                mb="24px"
                fontWeight="500"
                size="lg"
                {...register("lastName", { required: true })}
                aria-invalid={errors.lastName ? "true" : "false"}
                aria-describedby={errors.lastName ? "lastName-error" : ""}
              />
              <FormErrorMessage id="lastName-error">
                {errors.lastName?.type === "required" && "Last name is required"}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight={500}
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
                placeholder="johndoe@example.com"
                mb="24px"
                fontWeight="500"
                size="lg"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : ""}
              />
              <FormErrorMessage id="email-error">
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" && "Invalid email address"}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={Boolean(errors.password)}>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight={500}
                color={textColor}
                mb="8px"
              >
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="lg">
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type={show ? "text" : "password"}
                  placeholder="**********"
                  mb="24px"
                  fontWeight="500"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby={errors.password ? "password-error" : ""}
                />
                <InputRightElement
                  width="4.5rem"
                  height="100%"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon
                    as={show ? MdOutlineRemoveRedEye : RiEyeCloseLine}
                    onClick={handleClick}
                    cursor="pointer"
                    color={textColorSecondary}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage id="password-error">
                {errors.password?.type === "required" && "Password is required"}
                {errors.password?.type === "minLength" &&
                  "Password must be at least 6 characters"}
              </FormErrorMessage>
            </FormControl>

            <Button
            bg={"#00516D"}
            color={"white"}
              type="submit"
              colorScheme="brand"
              variant="solid"
              size="lg"
              w="100%"
              my="10px"
            >
              Sign Up
            </Button>
          </form>

          <Text
            textAlign="center"
            fontSize="sm"
            color={textColorDetails}
            mt="5px"
          >
            Already have an account?
            <NavLink
              to="/signin"
              color="{brandStars}"
              ml="2px"
              fontWeight={500}
              _hover={{ textDecoration: "none" }}
            >
              Log in
            </NavLink>
          </Text>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default Signup;