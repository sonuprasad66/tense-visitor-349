import React from 'react'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Image,
    Stack,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { Link as Go } from "react-router-dom";
import Login from   './Login';




  
const MainLandingPageNavbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const Links = [
      { title: "Blog", link: "/blog" },
      { title: "Register As A Professional", link: "/" },
      
    ];
  return (
    <div>

<>
      <Box
       
        bg={"blackAlpha.900"}
        color={"whiteAlpha.900"}
        px={4}
        w={"100%"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          fontWeight={"bold"}
          justifyContent={"space-around"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color={"blackAlpha.900"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            // border={"1px solid red"}
            width={"100%"}
            spacing={8}
            // alignItems={"center"}
            justifyContent={"space-between"}
          >
            {/* ${localStorage.getItem("location")} */}
            <Box>
              <Go to={`/service`}>
                <Image
                  src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                  width={"30%"}
                />
              </Go>
            </Box>
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
              // border={"2px solid teal"}
          
            >
              {Links.map((link, index) => (
                <Go to={link.link} key={index}>
                  {link.title}
                </Go>
              ))}
            </HStack>

            
            {<Login/>}

          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4} >
              {Links.map((link, index) => (
                <Go to={link.link} key={index}>
                  {link.title}
                </Go>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
      
    </div>
  )
}

export default MainLandingPageNavbar
