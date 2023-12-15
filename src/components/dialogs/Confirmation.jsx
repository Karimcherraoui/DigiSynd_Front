import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { payApartment } from '../../redux/actions/apartmentActions'

export default function Confirmation({ id, isOpen, onOpen, onClose }) {
        const dispatch = useDispatch()


        const payApartments = () => {
            dispatch(payApartment(id))
            onClose()
        }
  return (
    <>
      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pay Apartment Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to Pay this apartment ?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button background='Green' color='white' variant='ghost' onClick={payApartments}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
