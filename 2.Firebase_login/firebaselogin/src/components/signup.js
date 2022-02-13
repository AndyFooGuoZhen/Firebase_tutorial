import React, { useState } from "react";

import { VStack, Box, Input, Text, Button, Alert } from "@chakra-ui/react";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { async } from "@firebase/util";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email);
      console.log(password);
      setError("");
      await signUp(email, password);
      navigate("/");
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
          Sign up
        </Text>
        {error && (
          <Alert bg={"red"} variant="danger">
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            borderWidth={3}
            w={"80%"}
            mb={5}
            placeholder="email"
            p={5}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            borderWidth={3}
            type="password"
            w={"80%"}
            mb={5}
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
            Register
          </Button>
        </form>
        <Text mt={8}>
          Already have an account?{" "}
          <Link to="/">
            <Text display={"inline"} textDecoration={"underline"}>
              Log in
            </Text>
          </Link>
        </Text>
      </Box>
    </VStack>
  );
}

export default Signup;
