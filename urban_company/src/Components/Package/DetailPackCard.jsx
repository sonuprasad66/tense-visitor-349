import { Image, Text } from '@chakra-ui/react'
import React from 'react'

const DetailPackCard = ({data}) => {
  
  return (
    <div>
        <Image boxSize='60px' borderRadius="1rem"  _hover={{border:"2px solid blue"}} src={data.img} />
        <Text fontSize='xs' textAlign="start" boxSize='80px'>{data.para}</Text>
    </div>
  )
}

export default DetailPackCard