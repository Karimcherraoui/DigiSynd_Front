import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteApart } from '../../redux/actions/apartmentActions'

export default function DeleteConfirm({ id, isOpen, onOpen, onClose }) {
        const dispatch = useDispatch()


        const deleteApartment = () => {
          dispatch(deleteApart(id))
          onClose()
        }
  return (
    <>
      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Apartment Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete this apartment ?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button background='red' color='white' variant='ghost' onClick={deleteApartment}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
