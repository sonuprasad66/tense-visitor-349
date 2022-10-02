import {  Box, Button, Divider, Flex, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaTag } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getService } from '../../Redux/AppRedux/action'

const CheckoutTop = () => {

const navigate= useNavigate()
const wait=()=>{
  setTimeout(()=>{
// window.location.href="/booking"
navigate("/booking")
  },2000)
}
  const {id} = useParams()
  const[searchParams]= useSearchParams()
  const service = useSelector((state)=>state.AppRedux.service)
  const[data, setServiceData] = useState([])

  const dispatch = useDispatch()
  const location = useLocation()

  
  useEffect(()=>{
    if(location || service.length === 0){
      let getServiceParams={
        params:{
          price: searchParams.getAll("id")
        }
      }
      dispatch(getService(getServiceParams))
    }
  },[location, dispatch,searchParams,service])

useEffect(()=>{
  if(id){
    const data = service.find((ser)=> ser.id === Number(id))
    data && setServiceData(data)
  }
},[id,service])

//updates


  const addcity = JSON.parse(localStorage.getItem("addcity"))
  const [addresscity,setaddCity]= useState()


const handleCity=()=>{

  localStorage.setItem("addcity",JSON.stringify(addcity))

}



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
  const toast = useToast()


  const kartPrice = JSON.parse(localStorage.getItem("price"))
  return (
    <Box padding="40px">
      <Flex gap="20px">
        <Link to="/viewcart"><FaArrowLeft /></Link>
        <Text fontWeight="bold" marginBottom="5px">Summary</Text>
      </Flex>
      <Divider orientation='horizontal' border="1px" /><br />
      <Box width="500px" margin="auto">
        <Heading fontSize="md">Payment Summary</Heading><br />
        <Flex justifyContent="space-between" >
          <Text>Item Total</Text>
          <Text>₹ {kartPrice}</Text>
          
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
          <Text fontWeight="bold">₹ {kartPrice-150+69}</Text>
        </Flex>
        <br /><br />
        <Button variant='solid' width="450px" colorScheme="gray"  ><FaTag color="green" fontSize="xs" /><Text fontSize="xs" textAlign="center" color="green" marginLeft="10px" >Yay! You have saved ₹ 150 on final bill  </Text></Button>
        <br /><br />
        <Divider orientation='horizontal' border="2px" />
        <br />

        <Button
          colorScheme="purple" p="1rem"
          ml={150}
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Add Addreess and Slots
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl" >
          {overlay}
          <ModalContent>
            <ModalHeader>{addresscity?  addresscity: "Canaught Palace, Delhi"}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex justifyContent="space-between" gap="10px">
                <Box width="500px">
                  <iframe className='loco_map' title="map" width="450" height="320" id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${addresscity}&t=&z=13&ie=UTF8&iwloc=&output=embed`}>
                  </iframe>

                </Box>
                <Box width="250px">
                  <Box></Box>
                  <Input placeholder='House/Flat No*' defaultValue={addresscity ? addresscity : ""}
            value={addresscity}
            onChange={(e)=>setaddCity(e.target.value)}
            type="tel" required /><br /><br />
                  <Input placeholder='Landmark(Optional)' /><br /><br />
                  <Input placeholder='Name' required/><br /><br />
                  <Button colorScheme="purple" onClick={handleCity} variant='outline'>Choose City</Button>
                </Box>
              </Flex>


            </ModalBody>
            <ModalFooter>
              <Box onClick={wait}>
                <Button colorScheme="purple" p="1rem" onClick={() =>
        toast({
          title: 'Service Booked.',
          description: "We've booked your service. UC Professionals will get in touch with you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>Save and proceed to slots</Button>
              </Box>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>


  )
}

export default CheckoutTop