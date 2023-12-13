import { Icon } from "@chakra-ui/icon";
import { Flex, Text } from "@chakra-ui/layout";
import { MenuButton } from "@chakra-ui/menu";
import { CgProfile } from "react-icons/cg";

import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      w="900px"
      h="60px"
      flexShrink="0"
      borderRadius="20px"
      border="1px solid #FFF"
      background="linear-gradient(124deg, rgba(255, 255, 255, 0.00) -22.38%, rgba(255, 255, 255, 0.04) 70.38%)"
      backdropFilter="blur(21px)"
      justifyContent="space-between"
      alignItems="center"
      px="40px"
      top="7%"
      position="absolute"
      transform="translateY(-50%)"  
      left="20%" 
    >
      <Text
        fontSize="20px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="100%"
        letterSpacing="3.6px"
        background="linear-gradient(98deg, #FFF 70.67%, rgba(117, 122, 140, 0.00) 108.55%)"
        backgroundClip="text"
        
      >
        DigiSynd
      </Text>

      <Flex  gap="50px">
        <Text as={Link} to={"/dashboard"} color="gray.300"> Dashboard</Text>

        <Flex  gap="5px" alignItems="center">

          <Icon color="gray.300" as = {CgProfile}     />
          <Text as={Link} to={"/login"} color="gray.300">SIGN IN </Text>

        </Flex>
      </Flex>
    </Flex>
  );
}
