import { Flex, Spacer, Text } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";



export default function BoxStat({title , number , icon}) {
  return (
  
      <Flex
        px="20px"
        justifyContent="center"
        alignItems="center"
        w="230px"
        h="80px"
        flexShrink={0}
        borderRadius="20px"
        background="linear-gradient(127deg, rgba(6, 11, 40, 0.74) 18.26%, rgba(10, 14, 35, 0.71) 99.2%)"
        backdropBlur="blur(60px)"
      >
        <Flex flexDirection="column" fontSize="12px">
          <Text   color="gray"> {title}</Text>
          <Text color="white"> {number} </Text>
        </Flex>
        <Spacer />
        <Flex
          justifyContent="center"
          alignItems="center"
          boxShadow="0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)"
          borderRadius="12px"
          w="40px"
          height="40px"
          flexShrink={0}
          backgroundColor="#0075FF"
        >
          {/* <FaWallet color="white" size="20px" /> */}
            {icon}
        </Flex>
      </Flex>
  );
}
