import { VStack, Box, Input, Text, Button, Alert } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(password);
      setError("");
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <VStack h={"100vh"} justifyContent={"center"} align="center">
      <Box
        borderRadius={50}
        borderWidth={5}
        minW={"30vw"}
        maxW={"70vw"}
        minH={"40vh"}
        justifyContent={"center"}
        align="center"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          padding={5}
        >
          Login
        </Text>
        {error && (
          <Alert bg={"red"} variant={"danger"}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            borderWidth={3}
            w={"80%"}
            mb={5}
            type="email"
            placeholder="email"
            p={5}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            borderWidth={3}
            w={"80%"}
            mb={5}
            type="password"
            placeholder="password"
            p={5}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            minW={"80%"}
            colorScheme={"teal"}
            display={"block"}
            mb={5}
          >
            Login
          </Button>
        </form>
        <Button onClick={handleGoogleSignIn} minW={"80%"} colorScheme={"teal"}>
          <IoLogoGoogle size={20} mr={10} />
          <Text ml={30}>Login With Google</Text>
        </Button>
        <Link to={"/forgotPassword"}>
          <Text pt={8} textDecoration={"underline"}>
            Forgot Password?
          </Text>
        </Link>
        <Text mt={8}>
          Dont have an account?{" "}
          <Link to="/signup">
            <Text display={"inline"} textDecoration={"underline"}>
              Sign up
            </Text>
          </Link>
        </Text>
      </Box>
    </VStack>
  );
}

export default Login;
