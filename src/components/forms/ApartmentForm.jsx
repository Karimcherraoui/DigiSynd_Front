import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
   Input ,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addApartment } from "../../redux/actions/apartmentActions";
import { useNavigate } from "react-router-dom";


const emptyFormData = {
  firstNameOwner: "",
  lastNameOwner: "",
    phone: "",
    cin: "",
    numberApart: "",
    floor: "",
  };

export default function ApartmentForm() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [formData , setFormData] = useState(emptyFormData)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
   
      dispatch(addApartment(formData))
      navigate('/dashboard')
    
  }

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" w="100%">
        <Heading
          as="h2"
          size="md"
          color="white"
          textAlign="center"
          mb="20px"
          mt="30px"
        >
          Add Apartment
        </Heading>
        <Box
          p="50px"
          h="470px"
          borderRadius="25px"
          flexShrink="0"
          background="linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.71%, rgba(255, 255, 255, 0.39) 70.04%)"
          backdropFilter="blur(21px)"
        >
          <form onSubmit={handleSubmit}>

          <Grid templateColumns="repeat(2, 1fr)" gap="20px">
               <FormControl isRequired="true"  >
                <Flex flexDirection="column">
                  <FormLabel color="white">First name of Owner</FormLabel>
                  < Input color={"white"}  fontWeight={"bold"}    h="50px" placeholder="First name" onChange={handleChange} name="firstNameOwner" />
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="white">Last name of Owner</FormLabel>
                  < Input color={"white"}  fontWeight={"bold"}   h="50px" placeholder="Last name" onChange={handleChange} name="lastNameOwner"/>
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="white">Phone Number</FormLabel>
                  < Input color={"white"}  fontWeight={"bold"}   h="50px" placeholder="Phone Number" onChange={handleChange} name = "phone" />
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="white">CIN</FormLabel>
                  < Input color={"white"}  fontWeight={"bold"}   h="50px" placeholder="CIN" onChange={handleChange} name="cin"/>
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="white">Number of Apartment</FormLabel>
                  < Input color={"white"}  fontWeight={"bold"}  h="50px" placeholder="Number of Apartment" onChange={handleChange} name="numberApart"/>
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="white">Floor</FormLabel>
                  < Input color={"white"}  fontWeight={"bold"}   h="50px" placeholder="Floor"onChange={handleChange} name="floor" />
                </Flex>
              </FormControl>
          </Grid>
          <Flex justifyContent="center" alignItems="center" mt="40px">
            <Button colorScheme="blue" w="80%" type="submit">
              New Apartment
            </Button>
          </Flex>
          </form>

        </Box>
      </Flex>
    </>
  );
}
