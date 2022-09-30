import React from "react";
import "../styles/Services/ServiceBestDeal.css";
import { Box, SimpleGrid } from "@chakra-ui/react";

export const ServiceBestDeal = () => {
  return (
    <div className="bestdeal_container">
      {/* ========================slider======================================= */}

      <div className="bestdeal_slider">slider</div>
      <div className="backgrount"></div>
      {/* ========================image======================================= */}

      <div className="bestdeal_image">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/supply/partner-app-supply/1663246957053-241281.png"
          alt="best_offer"
        />
      </div>
      <div className="backgrount"></div>
      {/* ========================offer======================================= */}
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Best Offers</h1>
          <p>Hygienic & single-use products | low-contact services</p>
        </div>
        <div className="offer_content">
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Salon for Men</p>
                </div>
                <div className="content_price">
                  <span>Flat ₹100 off</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Salon at home for Women</p>
                </div>
                <div className="content_price">
                  <span>Free Waxing</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Massage for Men</p>
                </div>
                <div className="content_price">
                  <span>Starts at ₹499</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Bathroom and Kitchen Cleaning</p>
                </div>
                <div className="content_price">
                  {/* <span>Flat ₹100 off</span> */}
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
      <div className="backgrount"></div>
    </div>
  );
};
