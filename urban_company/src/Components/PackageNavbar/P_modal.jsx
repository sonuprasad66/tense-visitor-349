
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react'
import { useState } from 'react';
import Geolocation from "react-geolocation"

  export default function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure();

const [city,setCity]= useState()


const handleCity=()=>{
console.log(city)
  localStorage.setItem("city",JSON.stringify(city))
  window.location.reload()

}

    return (
      <>
        <Button variant='link' className='open_modal' onClick={onOpen}> Choose location</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Input
            defaultValue={city ? city : "Delhi"}
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            type="tel" placeholder='Search location' size='lg' />
             
            <div className='location_div'>

            <Geolocation
            render={({
              fetchingPosition,
              position: { coords: { latitude, longitude } = {} } = {},
              error,
              getCurrentPosition
            }) =>
              <div>
                
                {error &&
                  <div>
                    {error.message}
                  </div>}
             

                <div>
                <iframe className='loco_map' title="map" width="317" height="271" id="gmap_canvas" 
    
            
                src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                >
            
               </iframe></div>
              </div>}
          />
            
            
            
            </div>
            </ModalBody>
  
            <ModalFooter>
             
              <Button colorScheme="blue" onClick={handleCity} variant='outline'>Choose City</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }