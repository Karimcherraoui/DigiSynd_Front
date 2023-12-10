import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Items from "./items";

export default function SideBar() {
  const [navSize, setNaveChange] = useState("large");
  const MenuToggle = () => {
    navSize === "large" ? setNaveChange("small") : setNaveChange("large");
  };

  return (
    <Flex
      fontFamily="Alata"
      pos="sticky"
      h="auto"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRightRadius={navSize === "small" ? "0px" : "20px"}
      w={navSize === "small" ? "50px" : "200px"}
      flexDir="column"
      background="linear-gradient(112deg, #060B26 50.3%, rgba(26, 31, 55, 0.70) 100%)"
      backdropFilter="blur(60px)"
      transition="width 0.4s ease-in-out"
    >
      <Text
        color="white"
        fontSize="2xl"
        ml="10px"
        mt="10px"
        display={navSize === "small" ? "none" : "flex"}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        bgGradient="linear-gradient(98deg, #FFF 70.67%, rgba(117, 122, 140, 0.00) 108.55%)"
        bgClip="text"
        // webkitBgClip="text"
        // webkitTextFillColor="transparent"
      >
        DigiSynd
      </Text>
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon />}
          onClick={MenuToggle}
          size="lg"
          color="white"
        />
      </Flex>
      <Items navSize={navSize} />

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" ml="7px" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="xs" color="white">
              Karim Cherraoui
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
