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
  
  export default function RegisterForm() {
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
            <Text mb="10px">Welcome!</Text>
            <Text fontSize="10px">Use these awesome forms to create new account for syndic.</Text>
          </Heading>
          <Flex
            p="50px"
            h="450px"
            w="500px"
            borderRadius="25px"
            flexShrink="0"
            background="linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.71%, rgba(255, 255, 255, 0.39) 70.04%)"
            backdropFilter="blur(21px)"
            justifyContent="center"
          >
             
            <Flex flexDirection="column" gap="20px" w="100%" justifyContent="center" >
            <Flex flexDirection="column">
                <FormLabel color="white">Full Name</FormLabel>
                <Input h="50px" placeholder="Full Name" borderRadius="30px" />
              </Flex>

              <Flex flexDirection="column">
                <FormLabel color="white">Email</FormLabel>
                <Input h="50px" placeholder="Email" borderRadius="30px"/>
              </Flex>
              <Flex flexDirection="column">
                <FormLabel color="white">Password</FormLabel>
                <Input h="50px" placeholder="Password" borderRadius="30px" />
              </Flex>
  
              
            <Flex justifyContent="center" alignItems="center" mt="40px" >
              <Button background="#0075FF" w="80%" color="white">
                SIGN UP
              </Button>
            </Flex>
            </Flex>
          </Flex>
          <Footer />
        </Flex>
      </>
    );
  }
  