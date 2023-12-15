import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import Footer from "../layout/Footer";
import { useEffect, useState } from "react";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt } from "react-icons/bi";
import { useDispatch} from "react-redux";
import { loginAdmin } from "../../redux/actions/adminActions";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const toast = useToast();
 
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formData , setFormData] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginAdmin(formData,navigate));
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Incorrect email or password. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }
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
        <form onSubmit={handleSubmit}>
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
              <Input color={"white"} h="50px" placeholder="Email" borderRadius="30px" name="email" onChange={handleChange}/>
            </Flex>
            <FormControl isRequired>
                <Flex flexDirection="column">
                  <FormLabel color="white">Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                    name="password"
                      pr="4.5rem"
                      borderRadius="30px"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      color={"white"}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        background={"gray.200"}
                        onClick={handleClick}
                      >
                        {show ? (
                          <GrFormViewHide />
                        ) : (
                          <BiShowAlt size={"20px"} />
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>{" "}
                </Flex>
              </FormControl>

            
          <Flex justifyContent="center" alignItems="center" mt="40px" >
            <Button background="#0075FF" w="80%" color="white" type="submit">
              Login
            </Button>
          </Flex>
          </Flex>

        </Flex>
          </form>
        <Footer />
      </Flex>
    </>
  );
}
