import { Box, Divider, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getService } from '../../Redux/AppRedux/action'
import DetailPackCard from './DetailPackCard'

const DetailPack = () => {
    const service  = useSelector((state)=>state.AppRedux.service)
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
                
                <Box key ={item.id} p="10px" cursor="pointer" >
                    
                    <DetailPackCard data={item}/>
                </Box>
            )
        })}
    </Flex>
    </Box>
  )
}

export default DetailPack