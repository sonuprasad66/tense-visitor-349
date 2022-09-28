import { Button, Heading, Flex, AspectRatio, Container, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Image, ModalFooter } from '@chakra-ui/react'
import React from 'react'
import { FaCheckCircle, FaRegStar, FaHeart } from "react-icons/fa"


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle"


import { Autoplay, Pagination, Navigation } from "swiper";

const TopSection = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box p="20px">
            <br />
            <Divider orientation='horizontal' border="1px" />

            <Box textAlign="start">
                <Breadcrumb fontSize="xs">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/package'>Delhi NCR</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='/package'>Salon Prime in Delhi NCR</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <br />
            <Flex justifyContent="space-evenly" >
            
                <Container textAlign="start" marginTop="50px">
                    <Button variant='outline' onClick={onOpen}><FaCheckCircle /><Text fontSize="xs" marginLeft="10px">UC Safe</Text></Button>
                    <Modal isOpen={isOpen} onClose={onClose} size="xl">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>UC Safe</ModalHeader>

                            <ModalCloseButton />
                            <ModalBody>

                                <Swiper

                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"

                                    slidesPerView={1}

                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}>
                                    <SwiperSlide>
                                        <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623752701818-e68567.jpeg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623752707391-951b6b.jpeg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623752707901-37fdb7.jpeg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623752712928-bc5e6b.jpeg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623752702810-4c2ae6.jpeg" />
                                    </SwiperSlide>
                                </Swiper>
                            </ModalBody>
                            <ModalFooter>
                                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_600,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623753474030-d7dfc2.png" />
                            </ModalFooter>
                            <ModalFooter>

                                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_600,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1654064794529-7abb36.png" />
                            </ModalFooter>
                            <ModalFooter>
                                <Image src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_600,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1623753474806-c299a9.png" />
                            </ModalFooter>
                        </ModalContent>
                    </Modal>

                    <br />
                    <Heading>Saloon Prime</Heading>
                    <br />
                    <Flex fontSize='xs' ><FaRegStar /> <Text fontSize="xs" marginLeft="10px">4.76 (98k)</Text></Flex>
                    <br />
                    <Button variant='outline'><FaHeart color='red' /><Text fontSize="xs" marginLeft="30px">Message Guide</Text></Button>
                </Container>
                <Container >
                    <Swiper
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        slidesPerView={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <AspectRatio width="540px" height="300" >
                                <iframe
                                    title='womensaloon'
                                    src='https://www.youtube.com/embed/BENmAwUev0Q'
                                    autoplay
                                />
                            </AspectRatio>
                        </SwiperSlide>
                        <SwiperSlide>
                            <AspectRatio width="540px" height="300" >
                                <iframe
                                    title='womensaloon'
                                    src='https://www.youtube.com/embed/Os_ZLNrLuys'
                                    autoplay
                                />
                            </AspectRatio>
                        </SwiperSlide>
                        <SwiperSlide>
                            <AspectRatio width="540px" height="300" >
                                <iframe
                                    title='womensaloon'
                                    src='https://www.youtube.com/embed/sCq2CaT7DBQ'
                                    autoplay
                                />
                            </AspectRatio>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </Flex>


        </Box>
    )
}

export default TopSection