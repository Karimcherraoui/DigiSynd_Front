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
} from "@chakra-ui/react";
import Footer from "../layout/Footer";
import { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { registerAdmin } from "../../redux/actions/adminActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const emptyFormData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  };

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate()

  const [formData , setFormData] = useState(emptyFormData)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {

    dispatch(registerAdmin(formData))
    navigate('/dashboard')
  }

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="center"
        ml="100px"
        position="absolute"
        left="50%"
        top="10%"
      >
        <Heading
          as="h2"
          size="md"
          color="white"
          textAlign="center"
          mb="20px"
          mt="30px"
        >
          <Text mb="10px">Add new Syndic!</Text>
          <Text fontSize="10px">
            Use these awesome forms to create new account for syndic.
          </Text>
        </Heading>

        <form onSubmit={handleSubmit}>
        <Flex
        
          p="50px"
          h="500px"
          w="500px"
          borderRadius="25px"
          flexShrink="0"
          background="linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.71%, rgba(255, 255, 255, 0.39) 70.04%)"
          backdropFilter="blur(21px)"
          justifyContent="center"
        >
            <Flex
              flexDirection="column"
              gap="20px"
              w="100%"
              justifyContent="center"
              >
              <FormControl isRequired>
                <Flex flexDirection="column">
                  <FormLabel color="white">Full Name</FormLabel>
                  <Input
                  name="fullName"
                    h="50px"
                    placeholder="Full Name"
                    borderRadius="30px"
                    color={"white"}
                    fontWeight={"bold"}
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>

              <FormControl isRequired>
                <Flex flexDirection="column">
                  <FormLabel color="white">Email</FormLabel>
                  <Input
                  name="email"
                    h="50px"
                    placeholder="Email"
                    borderRadius="30px"
                    color={"white"}
                    fontWeight={"bold"}
                    onChange={handleChange}
                  />
                </Flex>
              </FormControl>

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
                      fontWeight={"bold"}
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
              <FormControl isRequired>
                <Flex flexDirection="column">
                  <FormLabel color="white">Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                    name="confirmPassword"
                      pr="4.5rem"
                      borderRadius="30px"
                      type={show ? "text" : "password"}
                      placeholder="Confirm password"
                      color={"white"}
                      fontWeight={"bold"}
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

              <Flex justifyContent="center" alignItems="center" mt="40px">
                <Button
                  background="#0075FF"
                  w="60%"
                  color="white"
                  type="submit"
                >
                  NEW SYNDIC
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
