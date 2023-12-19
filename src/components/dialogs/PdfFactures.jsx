import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PDFfile from "../pdf/PDFfile";

export default function PdfFactures({ dialog, apartment }) {

  const datesFacture = useSelector((state) => state.aparts.factures);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "numeric", year: "2-digit" });
  };

  return (
    <>
      <Modal isOpen={dialog.isOpen} onClose={dialog.onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download Facture</ModalHeader>
          <ModalBody>
          {datesFacture.length === 0 ? (
              <Flex w={"full"} justifyContent={"center"}>
                <Text my={"5px"} >
                  No Facture
                </Text>
              </Flex>
            ) : (
              datesFacture.map((dateFacture, index) => (
                <Flex w={"full"} justifyContent={"center"} key={index}>
                  <PDFDownloadLink
                    document={
                      <PDFfile apartment={apartment} date={dateFacture} />
                    }
                    fileName="Facture Payment"
                  >
                    <Button my={"5px"} background={"green.200"} >
                      {formatDate(dateFacture)}
                    </Button>
                  </PDFDownloadLink>
                </Flex>
              ))
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
