import {
  Avatar,

  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { LuPenSquare } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegFilePdf } from "react-icons/fa6";




export default function TableAppart() {
  return (
    <Table
      variant="unstyled"
      color="white"
      fontSize="sm"
      size="md"
      borderRadius="20px"
      background="linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)"
      backdropFilter="blur(60px)"
    >
      <Thead>
        <Tr>
          <Th color="gray.400" textAlign="center">
            OWNER
          </Th>
          <Th color="gray.400" textAlign="center">
            APPARTMENT
          </Th>
          <Th color="gray.400" textAlign="center">
            STATUS
          </Th>
          <Th color="gray.400" textAlign="center">
            DATE
          </Th>
          <Th color="gray.400" textAlign="center">
            Actions
          </Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td textAlign="center">
            <Avatar w="20px" h="20px" mr="10px" />
            Karim Cherraoui
          </Td>
          <Td textAlign="center">Appart 1</Td>
          <Td textAlign="center">
            <Button colorScheme="green" minW="100px" size="sm">
              Payed
            </Button>
          </Td>
          <Td textAlign="center">
                12/20/32
            </Td>

            <Td  >
                <Flex gap = "12px" justifyContent="center">
                <GiReceiveMoney />
                <LuPenSquare />
                <MdDeleteOutline />
                <FaRegFilePdf />
                </Flex>
            </Td>

        </Tr>
        <Tr>
          <Td textAlign="center">
            <Avatar w="20px" h="20px" mr="10px" />
            Oussama Ouafidi
          </Td>
          <Td textAlign="center">Appart 2</Td>
          <Td textAlign="center">
            <Button colorScheme="gray" minW="100px" size="sm">
              Not Payed
            </Button>
          </Td>
          <Td textAlign="center">
                12/20/32
            </Td>
            <Td  >
                <Flex gap = "12px" justifyContent="center">
                <GiReceiveMoney />
                <LuPenSquare />
                <MdDeleteOutline />
                <FaRegFilePdf />

                </Flex>
            </Td>
        </Tr>
        <Tr>
          <Td textAlign="center">
            <Avatar w="20px" h="20px" mr="10px" />
            Amine Hatim
          </Td>
          <Td textAlign="center">
            Appart 3
            </Td>
          <Td textAlign="center">
            <Button colorScheme="gray" minW="100px" size="sm">
              Not Payed
            </Button>
            </Td>
            <Td textAlign="center">
                12/20/32
            </Td>
            <Td  >
                <Flex gap = "12px" justifyContent="center">
                <GiReceiveMoney />
                <LuPenSquare />
                <MdDeleteOutline />
                <FaRegFilePdf />

                </Flex>
            </Td>
        </Tr>

            
      </Tbody>
    </Table>
  );
}
