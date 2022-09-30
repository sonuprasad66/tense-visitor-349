import { Box, Button, Divider, Flex, Heading, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaStar, FaTag, FaCaretSquareDown, FaRegStar } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { getService } from '../../Redux/AppRedux/action'
import reviewpic from "./reviews.PNG"

const PackageData = () => {
    const service = useSelector((state) => state.AppRedux.service)
    const dispatch = useDispatch()

    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1)
    }
    const subCount = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        dispatch(getService())

    })

    return (
        <Box p="20px">
            <Divider orientation='horizontal' border="2px" />
            <br />
            <Flex>
                <Box width="800px">
                    {service.length > 0 &&
                        service.map((item) => {
                            return (
                                <Box key={item.id} p="50px" cursor="pointer" >
                                    <Heading size='md' textAlign="start">{item.para}</Heading>
                                    <br />
                                    <Flex justifyContent="space-between">
                                        <Box>
                                            <Flex color="green" gap="5px" fontSize='xs'><FaCaretSquareDown />PACKAGE</Flex>
                                            <Text fontWeight="bold">{item.title}</Text>
                                            <Flex fontSize='xs' ><FaRegStar /> <Text fontSize="xs" marginLeft="10px">{item.rating}</Text></Flex>
                                            <Flex fontSize='xs' >
                                                <Text fontSize="md" fontWeight="bold">{item.price}</Text>
                                                <Text fontSize="xs" marginLeft="10px" marginTop="5px">{item.time}</Text>
                                            </Flex>
                                        </Box>
                                        <Box>
                                            <Image boxSize="20" borderRadius="1rem" src={item.img} />
                                            <Button colorScheme='white'>
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <Button variant='outline' color="blue" borderRadius="5">
                                                            <Text fontSize='xs'>ADD</Text></Button>
                                                    </PopoverTrigger>
                                                    <Portal>
                                                        <PopoverContent >
                                                            <PopoverArrow />

                                                            <PopoverCloseButton />
                                                            <PopoverBody>
                                                                <Button colorScheme='blue' disabled={count === 0} onClick={subCount}>-</Button>
                                                                <Button colorScheme='white' color={"blue"}>{count}</Button>
                                                                <Button colorScheme='blue' onClick={addCount}>+</Button>
                                                            </PopoverBody>
                                                        </PopoverContent>
                                                    </Portal>
                                                </Popover>
                                            </Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            )
                        })}
                    <Divider orientation='horizontal' border="1px" />
                    <Image src={reviewpic} p="20px" />
                    <Box textAlign="center" p="80px">
                        {service.length > 0 &&
                            service.map((item) => {
                                return (
                                    <>
                                        <Divider orientation='horizontal' border="1px" />
                                        <br />
                                        <Flex justifyContent="space-between">
                                            <Flex gap="10px">
                                                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_profile,q_auto:low,f_auto/w_48,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1649054989501-7edc6d.jpeg" />
                                                <Text fontWeight="bold">{item.name}</Text>

                                            </Flex>
                                            <Text fontSize='xs' color="gray" >Member from :-{item.member}</Text>
                                            <Flex fontSize='xs' fontWeight="bold" ><FaRegStar /> <Text fontSize="xs" marginLeft="10px">{item.star}</Text></Flex>
                                        </Flex>
                                        <Text textAlign="start">{item.review_detail}</Text>
                                        <br />

                                        <Divider orientation='horizontal' border="1px" />
                                    </>
                                )
                            })}

                    </Box>
                    <Divider orientation='horizontal' border="1px" />
                </Box>

                <Box width="500px">
                    <br /><br />
                    <Button variant='outline' width="400px" justifyContent="start"><FaStar color='blue' /><Text fontSize="xs" marginLeft="30px">Save 15% on every order </Text></Button><br /><br />
                    <Button variant='outline' width="400px" justifyContent="start"><FaTag color='green' /><Text fontSize="xs" marginLeft="30px">20% Cashback on Paytm</Text></Button><br /><br />
                    <Button variant='outline' width="400px" justifyContent="start"><FaTag color='green' /><Text fontSize="xs" marginLeft="30px">CRED Pay </Text></Button><br /><br />
                    <Button variant='outline' width="400px" justifyContent="start"><FaTag color='green' /><Text fontSize="xs" marginLeft="30px">5% Simpl Cashback upto ₹750</Text></Button><br /><br />
                    <Button variant='outline' width="400px" justifyContent="start"><FaTag color='green' /><Text fontSize="xs" marginLeft="30px">Assured Cashback on Paytm </Text></Button><br /><br />
                    <Button variant='outline' width="400px" justifyContent="start"><FaTag color='green' /><Text fontSize="xs" marginLeft="30px">Get upto ₹500 cashback  </Text></Button><br /><br />
                    <br /><br />
                    <Button variant='solid' width="400px" colorScheme="green" justifyContent="start"><FaTag color='white' /><Text fontSize="xs" marginLeft="30px">Congratulations! ₹59 saved so far  </Text></Button>
                    <br /><br />
                    <Flex justifyContent="space-around">
                        <Flex gap="10px">
                            <Box fontWeight="bold">₹ 849</Box>
                            <Box color="gray" as="s">₹ 790</Box>
                        </Flex>
                        <Button colorScheme="purple" p="1rem" >View Cart</Button>


                    </Flex>

                </Box>

            </Flex>
        </Box>
    )
}

export default PackageData