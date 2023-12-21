import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { updateApartment } from "../../redux/actions/apartmentActions";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";


export default function ModalUpdate({ id, apartment, isOpen, onOpen, onClose }) {
        const apart = useSelector((state) => state.aparts.selectedApartment);

    const dispatch = useDispatch()

  const [formData, setFormData] = useState(apartment);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateApartment(id, formData));

    onClose()

    
 
  };

    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}

        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit} >
            <ModalBody pb={6}>
            <FormControl isRequired="true"  >
                <Flex flexDirection="column">
                  <FormLabel color="black">First name of Owner</FormLabel>
                  < Input color={"black"}  fontWeight={"bold"} value={formData.firstNameOwner}    h="50px" placeholder="First name" onChange={handleChange} name="firstNameOwner" />
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="black">Last name of Owner</FormLabel>
                  < Input color={"black"}  fontWeight={"bold"} value={formData.lastNameOwner}   h="50px" placeholder="Last name" onChange={handleChange} name="lastNameOwner"/>
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="black">Phone Number</FormLabel>
                  < Input color={"black"}  fontWeight={"bold"} value={formData.phone}    h="50px" placeholder="Phone Number" onChange={handleChange} name = "phone" />
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="black">CIN</FormLabel>
                  < Input color={"black"}  fontWeight={"bold"} value={formData.cin}  h="50px" placeholder="CIN" onChange={handleChange} name="cin"/>
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="black">Number of Apartment</FormLabel>
                  < Input color={"black"}  fontWeight={"bold"} value={formData.numberApart}  h="50px" placeholder="Number of Apartment" onChange={handleChange} name="numberApart"/>
                </Flex>
              </FormControl>
               <FormControl isRequired >
                <Flex flexDirection="column">
                  <FormLabel color="black">Floor</FormLabel>
                  < Input  color={"black"}  fontWeight={"bold"} value={formData.floor}  h="50px" placeholder="Floor"onChange={handleChange} name="floor" />
                </Flex>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </form> 
          </ModalContent>
        </Modal>

      </>
    )
  }