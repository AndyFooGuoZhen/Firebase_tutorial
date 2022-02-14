import { Button, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { Text } from "@chakra-ui/react";

function Home() {
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {}
  };

  return (
    <VStack h={"100vh"} justifyContent={"center"}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        padding={5}
      >
        Welcome!
      </Text>
      <Text pb={10}>{user.email}</Text>

      <Button onClick={handleLogout}>Log out</Button>
    </VStack>
  );
}

export default Home;
