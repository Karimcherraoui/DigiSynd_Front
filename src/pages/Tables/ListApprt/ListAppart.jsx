import {
    Avatar,
    Divider,
    Spacer,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react";
  import React from "react";
  
  export default function ListAppart() {
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
              APPART
            </Th>
            <Th color="gray.400" textAlign="center">
              OWNER
            </Th>
            <Th color="gray.400" textAlign="center">
              TOTAL PAYED
            </Th>

          </Tr>
        </Thead>

        <Tbody>
            
          <Tr>
            <Td textAlign="center">inches</Td>
            <Td textAlign="center">
              <Avatar w="20px" h="20px" mr="10px" />
              millimetres (mm)
            </Td>
            <Td textAlign="center">test</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">feet</Td>
            <Td textAlign="center">
              <Avatar w="20px" h="20px" mr="10px" />
              millimetres (mm)
            </Td>
            <Td textAlign="center">test</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">yards</Td>
            <Td textAlign="center">
              <Avatar w="20px" h="20px" mr="10px" />
              test
            </Td>
            <Td textAlign="center">test</Td>
          </Tr>
        </Tbody>
      </Table>
    );
  }
  