import { Heading, HStack } from "@chakra-ui/react";
import * as React from "react";

export default function App() {
  return (
    <HStack w={"100w"} h={"100vh"} justify={"center"} bgColor={"purple.400"}>
      <Heading>If you smell what Chakra UI is cooking ?</Heading>
    </HStack>
  );
}
