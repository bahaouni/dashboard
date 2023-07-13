import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import illustration from "../assets/house.jpg";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { HSeparator } from "./HSeparator";
import DefaultAuth from "./Default";

function Signin() {
  const textColor = useColorModeValue("gray.700", "white");
  const textColorSecondary = useColorModeValue("gray.600", "gray.400");
  const brandStars = useColorModeValue("red.500", "red.300");
  const googleBg = useColorModeValue("white", "gray.600");
  const googleText = useColorModeValue("gray.700", "white");
  const googleHover = useColorModeValue({ bg: "gray.100" }, { bg: "gray.500" });
  const googleActive = useColorModeValue({ bg: "gray.200" }, { bg: "gray.400" });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  const handleServerValidation = () => {
    // Simulate server-side validation
    setError("email", {
      type: "manual",
      message: "Oops, this email is already taken.",
    });
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
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
        <Box me="auto">
          <Text mb="36px" ms="4px" color={textColorSecondary} fontWeight="400" fontSize="md">
            Enter your email and password to sign in!
          </Text>
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
          <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            bg={googleBg}
            color={googleText}
            fontWeight="500"
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
          >
            <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button>
          <Flex align="center" mb="25px">
            <HSeparator />
            <Text color="gray.400" mx="14px">
              or
            </Text>
            <HSeparator />
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={Boolean(errors.email)}>
              <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500" color={textColor} mb="8px">Email<Text color={brandStars}></Text>
</FormLabel>
<Input
borderColor={"black"}
isRequired={true}
variant="auth"
fontSize="sm"
ms={{ base: "0px", md: "0px" }}
type="email"
placeholder="mail@simmmple.com"
mb="24px"
fontWeight="500"
size="lg"
{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
aria-invalid={errors.email ? "true" : "false"}
aria-describedby={errors.email ? "email-error" : ""}
/>
<FormErrorMessage id="email-error">
{errors.email?.type === "required" && "Email is required"}
{errors.email?.type === "pattern" && "Please enter a valid email"}
{errors.email?.type === "manual" && errors.email.message}
</FormErrorMessage>
</FormControl>
<FormControl isInvalid={Boolean(errors.password)}>
<FormLabel ms="4px" fontSize="sm" fontWeight="500" color={textColor} display="flex">
Password<Text color={brandStars}></Text>
</FormLabel>
<InputGroup size="md">
<Input
isRequired={true}
fontSize="sm"
placeholder="Min. 8 characters"
mb="24px"
size="lg"
type={showPassword ? "text" : "password"}
{...register("password", { required: true, minLength: 8 })}
aria-invalid={errors.password ? "true" : "false"}
aria-describedby={errors.password ? "password-error" : ""}
/>
<InputRightElement display="flex" alignItems="center" mt="4px">
<Icon
color={textColorSecondary}
_hover={{ cursor: "pointer" }}
as={showPassword ? RiEyeCloseLine : MdOutlineRemoveRedEye}
onClick={handleClickPassword}
/>
</InputRightElement>
</InputGroup>
<FormErrorMessage id="password-error">
{errors.password?.type === "required" && "Password is required"}
{errors.password?.type === "minLength" && "Password must be at least 8 characters long"}
</FormErrorMessage>
</FormControl>
<Flex justifyContent="space-between" align="center" mb="24px">
<Checkbox defaultChecked>Keep me logged in</Checkbox>
<NavLink to="/Forgotpassword">
<Text

color="#00516D"

fontSize="sm"
ms="4px"
_hover={{ textDecoration: "underline" }}
>
Forgot Password?
</Text>
</NavLink>
</Flex>
<Button
bg={brandStars}
color="white"
type="submit"
borderRadius="16px"
w="100%"
h="50px"
fontWeight="500"
fontSize="sm"
bg="#00516D"
_hover={{ bg: "#00516D" }}
_focus={{ outline: "none" }}
>
Sign In
</Button>
</form>
<NavLink  to="/auth/Sign-up">
<Text
fontSize="sm"
mt="30px"
mb="20px"
color={textColorSecondary}
textAlign="center"
_hover={{ textDecoration: "underline" }}
cursor="pointer"
onClick={handleServerValidation}
>
Don't have an account yet? Sign up
</Text>
</NavLink >
</Flex>
</Flex>
</DefaultAuth>
);
}

export default Signin;