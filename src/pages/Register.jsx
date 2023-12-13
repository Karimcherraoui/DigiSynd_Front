
import React from "react";
import Header from "../components/layout/Header";
import { Flex } from "@chakra-ui/layout";
import loginImage from "../assets/images/loginImage.png";

import { Image } from "@chakra-ui/image";
import RegisterForm from "../components/forms/RegisterForm";

export default function Register() {
  return (
    <Flex
      background="linear-gradient(159deg, #0F123B 14.25%, #090D2E 56.45%, #020515 86.14%)"
      maxH="100vh"
      flexDirection="column"
    >
      <Header />

      <Flex >
        <Image src={loginImage} w="50%" maxH="100vh" />
        <RegisterForm />
        </Flex>
    </Flex>
  );
}

