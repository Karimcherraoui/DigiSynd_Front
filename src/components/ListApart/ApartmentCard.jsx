import React, { useEffect } from "react";
import { Button, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import img from "../../assets/images/apart.webp";
import { LuPenSquare } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { FaRegFilePdf } from "react-icons/fa6";
import DeleteConfirm from "../dialogs/DeleteConfirm";
import Confirmation from "../dialogs/confirmation";
import ModalUpdate from "../forms/modalUpdate";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFfile from "../pdf/PDFfile";
import PdfFactures from "../dialogs/PdfFactures";
import { getFactures } from "../../redux/actions/apartmentActions";
import { useDispatch } from "react-redux";

export default function ApartmentCard({ apartment }) {
  const deleteDialog = useDisclosure();
  const paymentDialog = useDisclosure();
  const updateDialog = useDisclosure();
  const facturesDialog =useDisclosure()
  const dispatch = useDispatch()
const handleClickPDF = () => {
  dispatch(getFactures(apartment._id))
  facturesDialog.onOpen();
}

  const handleClickPay = () => {
    paymentDialog.onOpen();
  };
  const handleClickDelete = () => {
    deleteDialog.onOpen();
  };
  const handleClickUpdate = () => {
    updateDialog.onOpen();
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
      <DeleteConfirm
        id={apartment._id}
        isOpen={deleteDialog.isOpen}
        onClose={deleteDialog.onClose}
      />
      <Confirmation
        id={apartment._id}
        isOpen={paymentDialog.isOpen}
        onClose={paymentDialog.onClose}
      />

      <ModalUpdate
        id={apartment._id}
        apartment={apartment}
        isOpen={updateDialog.isOpen}
        onClose={updateDialog.onClose}
      />
      <PdfFactures dialog={facturesDialog} id={apartment._id} apartment={apartment}/>
      <Flex pos="absolute" gap="10px" right="10px" top="10px">
        <Button size="sm" colorScheme="blue" variant="solid"onClick={handleClickUpdate} >
          <LuPenSquare />
        </Button>

        <Button
          size="sm"
          colorScheme="red"
          variant="solid"
          onClick={handleClickDelete}
        >
          <MdDeleteOutline />{" "}
        </Button>
      </Flex>
      <Image
        src={img}
        w="100%"
        h="50%"
        boxShadow="rgba(0, 0, 0, 0.35) 2px 2px 10px"
      />

      <Flex
        flexDirection="column"
        w="100%"
        mx="30px"
        mt="20px"
        gap="7px"
        p="10px"
      >
        <Text size="sm" color="black" w="100%">
          <span style={{ width: "100%", height: "1px", fontWeight: "bold" }}>
            Owner :{" "}
          </span>
          {apartment.firstNameOwner} {apartment.lastNameOwner}
        </Text>
        <Text color="black">
          {" "}
          <span style={{ width: "100%", height: "1px", fontWeight: "bold" }}>
            Number :{" "}
          </span>
          {apartment.numberApart}
        </Text>
        <Text color="black">
          {" "}
          <span style={{ width: "100%", height: "1px", fontWeight: "bold" }}>
            Floor :{" "}
          </span>
          {apartment.floor}
        </Text>
        <Text color="black">
          {" "}
          <span style={{ width: "100%", height: "1px", fontWeight: "bold" }}>
            Phone :{" "}
          </span>
          {apartment.phone}
        </Text>
      </Flex>

      <Flex gap="10px" py="15px" justifyContent="center">
        <Button
          onClick={handleClickPay}
          leftIcon={<GiReceiveMoney />}
          w="70%"
          colorScheme={apartment.isPaid ? "gray" : "green"}
          variant="solid"
          isDisabled={apartment.isPaid}
        >
          {apartment.isPaid ? "Paid" : "Pay"}
        </Button>
        <Button
          w="20%"
          colorScheme="gray"
          border="1px solid black"
          variant="solid"
          onClick={handleClickPDF}
        >
          
          <FaRegFilePdf  />
        </Button>
      </Flex>
    
    </Flex>
  );
}
