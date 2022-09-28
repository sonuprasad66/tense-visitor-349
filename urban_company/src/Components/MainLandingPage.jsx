import React, { useState } from 'react'
import {
    Box,
    Image,
    Select,
    Text,
    
    VStack,
  } from "@chakra-ui/react";
  
  import "../../src/StyleComponents/MainLandingPage.css";
  
  import { Cities } from "../assets/Cities";
import { useNavigate } from 'react-router-dom';
import MainLandingPageNavbar from './MainLandingPageNavbar';



const MainLandingPage = () => {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const handleChange = (value) => {
        setCity(value);
        localStorage.setItem("location", value);
        navigate(`/${value}`);
      };
  return (
     
    <div>
        <>
        <div>{<MainLandingPageNavbar/>}</div>
        

<Box pos={"relative"}>
        <Image w={"40%"} src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg" />

        <Box
          width={"100%"}
          height={"100%"}
        //   border={"1px solid yellow"}
          className="text"
          fontWeight={"bold"}
          pos={"absolute"}
          right="0.5"
          top={"0.5"}
        >
         
          <Box
        
            width={"44%"}
            marginLeft={"55%"}
            h={"100%"}
          >
            <VStack gap={5}>
               
              <Text className="heading">URBAN COMPANY</Text>
              
              <Text className="subHeading">
                Quality home services, on demand
              </Text>
              <br />
              <div className='exp1'>
              <Text className="exp" w={"25rem"} textAlign={"left"}>
                Experienced, hand-picked Professionals to serve you at your doorstep
               
              </Text>
              </div>
              {/* <br /> */}
              <Box
                bg={"whiteAlpha.900"}
                borderRadius={"8"}
                padding={"5"}
                color={"blackAlpha.900"}
              >
                <Text>Where do you need a service?</Text>
                <Select
                  cursor={"pointer"}
                  placeholder="Select City"
                  value={city}
                  width={"20em"}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  {Cities.map((item, index) =>
                    item.city ? (
                      <option
                        key={index}
                        style={{ cursor: "pointer" }}
                        value={item.city}
                      >
                        {item.city}
                      </option>
                    ) : (
                      <option key={index} disabled value={item.country}>
                        {item.country}
                      </option>
                    )
                  )}
                </Select>
                {/* <br /> */}
              </Box>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
     
    </div>

  )
}

export default MainLandingPage
