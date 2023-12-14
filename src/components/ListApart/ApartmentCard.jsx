import React from 'react'
import { Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import img from "../../assets/images/apart.webp";
import { LuPenSquare } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegFilePdf } from "react-icons/fa6";
import DeleteConfirm from "../dialogs/DeleteConfirm";
import { useDispatch } from 'react-redux';
import { payApartment } from '../../redux/actions/apartmentActions';

export default function ApartmentCard({apartment}) {
  console.log(apartment);
  const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handlPayment = () => {
      dispatch(payApartment(apartment._id))
    }




    return ( 
        <Flex
      flexDirection="column"
      m="30px"
      overflow="hidden"
      background="white"
      border="2px solid white"
      rounded="10px"
      pos="relative"
      boxShadow="rgba(0, 0, 0, 0.35) 20px 20px 30px"
      position="relative"
    >
      <DeleteConfirm id={apartment._id} isOpen={isOpen} onClose={onClose} />
      <Flex pos="absolute" gap="10px" right="10px" top="10px">
        <Button size="sm" colorScheme="blue" variant="solid">
          <LuPenSquare />
        </Button>
  
        <Button size="sm" colorScheme="red" variant="solid" onClick={onOpen}>
          <MdDeleteOutline />{" "}
        </Button>
      </Flex>
      <Image
        src={img}
        w="100%"
        h="50%"
        boxShadow="rgba(0, 0, 0, 0.35) 2px 2px 10px" />
  
      <Flex
        flexDirection="column"
        w="100%"
        mx="30px"
        mt="20px"
        gap="7px"
        p="10px"
      >
        <Text size="sm" color="black" w="100%">
          <span
            style={{ width: "100%", height: "1px", fontWeight: "bold" }}
          >
            Owner :{" "}
          </span>
          {apartment.firstNameOwner} {apartment.lastNameOwner}
        </Text>
        <Text color="black">
          {" "}
          <span
            style={{ width: "100%", height: "1px", fontWeight: "bold" }}
          >
            Number :{" "}
          </span>
          {apartment.numberApart}
        </Text>
        <Text color="black">
          {" "}
          <span
            style={{ width: "100%", height: "1px", fontWeight: "bold" }}
          >
            Floor :{" "}
          </span>
          {apartment.floor}
        </Text>
        <Text color="black">
          {" "}
          <span
            style={{ width: "100%", height: "1px", fontWeight: "bold" }}
          >
            Phone : {" "}
          </span>
          {apartment.phone}
        </Text>
      </Flex>
  
      <Flex gap="10px" py="15px" justifyContent="center">
        <Button
        onClick={handlPayment}
          leftIcon={<GiReceiveMoney />}
          w="70%"
          colorScheme={apartment.isPaid ? "gray" : "green"}
          variant="solid"
          isDisabled={apartment.isPaid}

        >
          {apartment.isPaid ? "Payed" : "Pay"}
        </Button>
        <Button
          w="20%"
          colorScheme="gray"
          border="1px solid black"
          variant="solid"
        >
          <FaRegFilePdf />
        </Button>
      </Flex>
    </Flex>
    )
  }
  
  