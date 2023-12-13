import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Footer from "../layout/Footer";

export default function LoginForm() {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        ml="100px"
        position="absolute"
        left="50%"
        top="15%"
      >
        <Heading
          as="h2"
          size="md"
          color="white"
          textAlign="center"
          mb="20px"
          mt="30px"
        >
          <Text mb="10px">Nice to see you!</Text>
          <Text fontSize="10px">Enter your email and password to sign in</Text>
        </Heading>
        <Flex
          p="50px"
          h="400px"
          w="500px"
          borderRadius="25px"
          flexShrink="0"
          background="linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.71%, rgba(255, 255, 255, 0.39) 70.04%)"
          backdropFilter="blur(21px)"
          justifyContent="center"
        >
          <Flex flexDirection="column" gap="20px" w="100%" justifyContent="center" >
            <Flex flexDirection="column">
              <FormLabel color="white">Email</FormLabel>
              <Input h="50px" placeholder="Email" borderRadius="30px" />
            </Flex>
            <Flex flexDirection="column">
              <FormLabel color="white">Password</FormLabel>
              <Input h="50px" placeholder="Password" borderRadius="30px" />
            </Flex>

            
          <Flex justifyContent="center" alignItems="center" mt="40px" >
            <Button background="#0075FF" w="80%" color="white">
              Login
            </Button>
          </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
