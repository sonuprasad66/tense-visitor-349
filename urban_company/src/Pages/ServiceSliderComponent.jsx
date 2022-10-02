import { Box } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/Services/ServiceSliderComponent.css";
import { Navigation } from "swiper";

export const ServiceSliderComponent = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          className="external-buttons"
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Box>
              <div className="SliderBox">
                <img className="slider_img"  
               
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1662377264033-320229.png"
                  alt="s1"
                />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <div className="SliderBox">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663937862584-33cc6c.jpeg"
                  alt="s2"
                />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <div className="SliderBox">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1661745699456-99d612.png"
                  alt="s3"
                />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <div className="SliderBox">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663935764851-d1a3e2.jpeg"
                  alt="s4"
                />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <div className="SliderBox">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1663945434053-273a1a.jpeg"
                  alt="s5"
                />
              </div>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <div className="SliderBox">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1661745697178-c83202.png"
                  alt="s6"
                />
              </div>
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
