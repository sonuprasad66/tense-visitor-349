import { Box, Button, Divider, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft, FaTag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CheckoutTop = () => {
  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayTwo />)

  return (
    <Box padding="40px">
      <Flex gap="20px">
      <Link to="/viewcart"><FaArrowLeft /></Link>
      <Text fontWeight="bold" marginBottom="5px">Summary</Text>
      </Flex>
      <Divider orientation='horizontal' border="1px" /><br />
      <Box  width="500px" margin="auto">
      <Heading fontSize="md">Payment Summary</Heading><br />
      <Flex justifyContent="space-between" >
        <Text>Item Total</Text>
        <Text>₹ 790</Text>
      </Flex><br />
      <Flex justifyContent="space-between" >
        <Text>Membership Discount</Text>
        <Text color="green">-₹ 150</Text>
      </Flex><br />
      <Flex justifyContent="space-between" >
        <Text>Convenience fee</Text>
        <Text >₹ 69</Text>
      </Flex><br />
      <Divider orientation='horizontal' border="0.5px" />
      <Flex justifyContent="space-between" >
        <Text fontWeight="bold">Total</Text>
        <Text  fontWeight="bold">₹ 150</Text>
      </Flex>
      <br /><br />
      <Button variant='solid' width="450px" colorScheme="gray"  ><FaTag color="green" fontSize="xs"  /><Text fontSize="xs" textAlign="center" color="green" marginLeft="10px" >Yay! You have saved ₹141 on final bill  </Text></Button>
      <br /><br />
      <Divider orientation='horizontal' border="2px" />
      <br />
      
      <Button
      colorScheme="purple" p="1rem"
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Add Addreess and Slots 
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size= "3xl" >
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="space-between">
              <Box>
              
             
              
              </Box>
              <Box width="250px">
              <Input placeholder='House/Flat No*' required /><br /><br />
              <Input placeholder='Name' />
              </Box>
            </Flex>
          
          
          </ModalBody>
          <ModalFooter>
            <Link to="/booking">
            <Button colorScheme="purple" p="1rem">Save and proceed to slots</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </Box>
  )
}

export default CheckoutTop