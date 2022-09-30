import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft  } from "react-icons/fa"
import { Link } from 'react-router-dom'

const PlusSection = () => {
  return (
    <Box padding="40px">
        
        <Link to="/package"><FaArrowLeft /></Link>
        <Flex justifyContent="space-between" padding="20px">
            <Box>
              <Image  src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_144,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626353785493-75ebc7.png"/>
                <Heading fontSize="lg">Save 15% on every order + top rated professionals</Heading><br />
                <Flex gap="10px">
                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_20,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1627582398810-cd7baa.png"/>
                <Text color="green">You will save ₹99 on this order</Text>
                </Flex>
            </Box>
            <Box>
              <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_150,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626412070305-a18abb.png"/>
              <br />
              
            </Box>
        </Flex>
        <Flex>
          <Box width="700px" border="1px solid " padding="20px">
          <Text fontWeight="bold" textAlign="start">Other Benefits</Text><br />
          <Flex gap="10px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_category/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1634028128628-b047e3.png"/>
            <Box>
              <Text fontWeight="medium" textAlign="start" color="gray">100% moneyback gurantee</Text>
              <Text fontSize="xs" textAlign="start" color="gray">If you save less than your membership price we refund you the difference</Text>
            </Box>
          </Flex><br />
          <Flex gap="10px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_category/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1640364768771-a82407.png"/>
            <Box>
              <Text fontWeight="medium" textAlign="start" color="gray">Top rated professionals</Text>
              <Text fontSize="xs" textAlign="start" color="gray">Get exclusively trained UC plus professionals at your service</Text>
            </Box>
          </Flex>
          <br />
        <Divider orientation='horizontal' border="3px" />
        <br />
        <Flex gap="10px" justifyContent="space-between">
        <Box>
              <Text fontWeight="medium" textAlign="start" >Estimated savings</Text>
              <Text fontSize="2xl"  fontWeight="bold" textAlign="start" color="green">₹ 1440</Text>
            </Box>
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626076109261-2d8e7b.png"/>
            
          </Flex>
          <br />
          <Text textAlign="start">No of services / year</Text>
          <Flex gap="5px">
            <Button variant='outline'>2</Button>
            <Button variant='outline'>4</Button>
            <Button variant='outline'>6</Button>
            <Button variant='outline'>8</Button>
            <Button variant='outline'>10</Button>
            <Button variant='outline'>12</Button>
          </Flex>
          </Box>
          
          <Box width="500px" border="1px solid red" padding="20px">
          <Text fontWeight="bold" textAlign="start">Select your plan</Text>
          <br />
          <Box border="0.5px solid gray" width="400px" justifyContent="start"></Box><br /><br />
          <Box border="0.5px solid gray" width="400px" justifyContent="start"></Box><br /><br />
          </Box>
          
        </Flex>
        
    </Box>
  )
}

export default PlusSection