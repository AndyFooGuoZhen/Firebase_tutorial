import { VStack, Box, Input, Text, Button } from "@chakra-ui/react";
import React from "react";

function Login() {
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
        <Input borderWidth={3} w={"80%"} mb={5} placeholder="email" p={5} />
        <Input borderWidth={3} w={"80%"} mb={5} placeholder="password" p={5} />
        <Button minW={"80%"} colorScheme={"teal"} display={"block"} mb={5}>
          Login
        </Button>
      </Box>
    </VStack>
  );
}

export default Login;
