import React from "react";
import { VStack, Box, Text, Alert, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      await resetPassword(email);
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
        minH={"30vh"}
        justifyContent={"center"}
        align="center"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
          padding={5}
        >
          Password Reset
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

          <Button
            type="submit"
            minW={"80%"}
            colorScheme={"teal"}
            display={"block"}
            mb={5}
          >
            Reset password
          </Button>
        </form>
      </Box>
    </VStack>
  );
}

export default ForgotPassword;
