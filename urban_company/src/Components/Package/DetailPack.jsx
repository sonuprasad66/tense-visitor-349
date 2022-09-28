import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getService } from '../../Redux/AppRedux/action'

const DetailPack = () => {
    const service = useSelector((state)=>state.AppRedux.service)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getService())
        
    })
    
  return (
    <Box p="20px">
        <Divider orientation='horizontal' border="3px"/>
    <Flex gap="5px">
        {service.length > 0 &&
        service.map((item)=>{
            
            return (
                
                <Box key ={item.id} p="10px">
                    <Image boxSize='60px' borderRadius="1rem" src={item.img} />
                    <Text fontSize='xs' textAlign="start" boxSize='80px'>{item.para}</Text>
                </Box>
            )
        })}
    </Flex>
    </Box>
  )
}

export default DetailPack