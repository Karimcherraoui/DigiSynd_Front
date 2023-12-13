
import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Grid, Heading, Input } from '@chakra-ui/react'
import  { useState } from 'react'

export default function ApartmentForm() {


    return (
        <>
        <Flex flexDirection="column" justifyContent="center"   w="100%" >
        <Heading as="h2" size="md" color="white" textAlign="center" mb="20px" mt="30px" >
            Add Apartment
        </Heading>
        <Box  p="50px" h="470px"  borderRadius="25px" flexShrink="0" background="linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.71%, rgba(255, 255, 255, 0.39) 70.04%)" backdropFilter="blur(21px)">

        <Grid  templateColumns='repeat(2, 1fr)' gap="20px"   >
            <Flex flexDirection="column">
            <FormLabel color="white">First name of Owner</FormLabel>
            <Input h="50px" placeholder="First name" />
            </Flex>
            <Flex flexDirection="column" >
            <FormLabel color="white">Last name of Owner</FormLabel>
            <Input h="50px" placeholder="Last name" />
            </Flex>

            <Flex flexDirection="column">
            <FormLabel color="white">Phone Number</FormLabel>
            <Input h="50px" placeholder="Phone Number" />
            </Flex>
            <Flex flexDirection="column">
            <FormLabel color="white">CIN</FormLabel>
            <Input h="50px" placeholder="CIN" />
            </Flex>

            <Flex flexDirection="column">
            <FormLabel color="white">Number of Apartment</FormLabel>
            <Input h="50px" placeholder="Number of Apartment" />
            </Flex>
            <Flex flexDirection="column" >
            <FormLabel color="white">Floor</FormLabel>
            <Input h="50px" placeholder="Floor" />
            </Flex>
            
            

        </Grid>
        <Flex justifyContent="center" alignItems="center" mt="40px">
          <Button colorScheme="blue" w="80%">
            Submit
          </Button>
        </Flex>
        </Box>

        </Flex>

        </>
    )
}
