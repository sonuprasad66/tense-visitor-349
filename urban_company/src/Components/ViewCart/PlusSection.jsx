import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { Button, Image } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft, FaClipboardList, FaPercentage, FaArrowRight  } from "react-icons/fa"
import { Link } from 'react-router-dom'

const PlusSection = () => {
  return (
    <Box padding="40px">

      <Link to="/package"><FaArrowLeft /></Link>
      <Flex justifyContent="space-between" padding="20px">
        <Box>
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_144,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626353785493-75ebc7.png" />
          <Heading fontSize="lg">Save 15% on every order + top rated professionals</Heading><br />
          <Flex gap="10px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_20,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1627582398810-cd7baa.png" />
            <Text color="green">You will save ₹99 on this order</Text>
          </Flex>
        </Box>
        <Box>
          <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_150,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626412070305-a18abb.png" />
          <br />

        </Box>
      </Flex>
      <Flex>
        <Box width="700px"  padding="20px">
          <Text fontWeight="bold" textAlign="start">Other Benefits</Text><br />
          <Flex gap="10px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_category/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1634028128628-b047e3.png" />
            <Box>
              <Text fontWeight="medium" textAlign="start" color="gray">100% moneyback gurantee</Text>
              <Text fontSize="xs" textAlign="start" color="gray">If you save less than your membership price we refund you the difference</Text>
            </Box>
          </Flex><br />
          <Flex gap="10px">
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_category/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1640364768771-a82407.png" />
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
              <Text fontSize="2xl" fontWeight="bold" textAlign="start" color="green">₹ 1440</Text>
            </Box>
            <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_medium_res_profile,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/customer-subscription/1626076109261-2d8e7b.png" />

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
          </Flex><br />
          <Flex gap="10px" fontSize="xs">
            <FaClipboardList />
            <Text>Subscriber placed 6 orders on average in your area</Text>
          </Flex>
          <br />
          <Divider orientation='horizontal' border="3px" />
        </Box>

        <Box width="500px"  padding="20px">
          <Text fontWeight="bold" textAlign="start">Select your plan</Text>
          <br />
          <Box border="0.5px solid gray" width="400px" justifyContent="start" borderRadius="0.5rem" padding="10px">
            <Flex gap="10px" justifyContent="space-between">
              <Box>
                <Text fontSize="xs" color="green" textAlign="start" >BOUGHT 6LAKH+ TIMES</Text>
                <Text fontWeight="bold" textAlign="start">12 Months</Text>
                <Flex gap="10px">
                  <Box >₹ 299</Box>
                  <Box color="gray" fontStyle="xs" as="s">₹ 999</Box>
                </Flex>
              </Box>
              <Button variant='outline' colorScheme="purple" marginTop="10px">Remove</Button>
            </Flex>
          </Box><br />
          <br />
          <Box border="0.5px solid gray" width="400px" justifyContent="start" borderRadius="0.5rem" padding="10px">
            <Flex gap="10px" justifyContent="space-between">
              <Box>
                <Text fontSize="xs" color="green" textAlign="start" >BOUGHT 8LAKH+ TIMES</Text>
                <Text fontWeight="bold" textAlign="start">6 Months</Text>
                <Flex gap="10px">
                  <Box >₹ 249</Box>
                  <Box color="gray" fontStyle="xs" as="s">₹ 699</Box>
                </Flex>
              </Box>
              <Button variant='outline' colorScheme="purple" marginTop="10px">Add</Button>
            </Flex>
          </Box><br />
          <br />
          <Divider orientation='horizontal' border="3px" /><br /><br />
          <Button variant='solid' width="450px" colorScheme="gray"  ><FaPercentage color="green" fontSize="xs"  /><Text fontSize="xs" textAlign="center" color="green" marginLeft="10px" >₹141 Plus discount applied  </Text></Button>
                    <br /><br />
                    <Flex justifyContent="space-around">
                        <Flex gap="10px">
                            <Box fontWeight="bold">₹</Box>
                            <Box color="gray" as="s">₹ 790</Box>
                        </Flex>
                        <Link to="/viewcart">
                        <Button colorScheme="purple" p="1rem" >Proceed <FaArrowRight  /> </Button>
                        </Link> 
                        

                    </Flex>
        </Box>

      </Flex>

    </Box>
  )
}

export default PlusSection