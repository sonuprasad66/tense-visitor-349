import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CheckoutTop = () => {
  return (
    <Box padding="40px">
      <Flex gap="20px">
      <Link to="/viewcart"><FaArrowLeft /></Link>
      <Text fontWeight="bold" marginBottom="5px">Summary</Text>
      </Flex>
      <Divider orientation='horizontal' border="1px" /><br />
      <Box border="1px solid black" width="500px" margin="auto">
      <Heading fontSize="md">Payment Summary</Heading><br />
      <Flex justifyContent="space-between" >
        <Text>Item Total</Text>
        <Text>₹ 790</Text>
      </Flex>
      <Flex justifyContent="space-between" >
        <Text>Membership Discount</Text>
        <Text color="green">-₹ 150</Text>
      </Flex>
      <Flex justifyContent="space-between" >
        <Text>Convenience fee</Text>
        <Text >₹ 69</Text>
      </Flex>
      </Box>
    </Box>
  )
}

export default CheckoutTop