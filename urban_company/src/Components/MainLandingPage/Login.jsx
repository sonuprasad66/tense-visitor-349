



import React, { useState } from "react";

import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Link,
  Box,
  Text,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { isOpen, onOpen, onClose } =    useDisclosure();


  const btnRef = React.useRef();



  const navigate = useNavigate();

  const handleAlert = () => {
    alert("Otp has been Successfully Sent");
    document.getElementById("om").style.display = "none";
    document.getElementById("otp").style.display = "block";
  };

  return (
    <div>
      <>
        <Link ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Login/Sign Up
        </Link>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Please Login To Countinue</DrawerHeader>

            <DrawerBody id="om">
              <DrawerBody>
                <Input
                  placeholder="Enter Your Mobile Number..."
                  maxLength={10}
                />
              </DrawerBody>

              <DrawerBody mb={500} ml={70}>
                <Button colorScheme="blue" onClick={handleAlert}>
                  Continue
                </Button>
              </DrawerBody>
            </DrawerBody>
            <Box display={"none"} id="otp">
              <Text
            
                fontWeight={"bold"}
                fontFamily={"sans-serif"}
             
                textAlign={"center"}
              >
                Enter OTP:
              
              </Text>
              <Box m="auto" ml="10%">
                <PinInput>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </Box>
            </Box>

            <Button
              variant="outline"
              width={"100%"}
              onClick={() => {
                onClose();
                navigate("/service");
              }}
              bottom={"0"}
              position={"absolute"}
            >
              Login
            </Button>
            
            <div id="recaptcha-container"></div>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default Login;
