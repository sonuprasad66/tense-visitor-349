import React from "react";
import "../styles/Services/ServiceAppliances.css";
import "../styles/Services/ServiceBestDeal.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
export const ServiceAppliances = () => {
  return (
    <div className="appliances_container">
      {/* ===============================Appliances============================================ */}
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Appliances</h1>
          <p>Servicing, Repair, Installation & Uninstallation</p>
        </div>
        <div className="appliances_content">
          <SimpleGrid columns={[1, 2, 2, 3]} spacing="50px">
            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png"
                    alt="hair"
                  />
                </div>
                <div className="content_category">
                  <p>Geyser</p>
                </div>
                {/* <div className="content_price">
                  <span>Flat ₹100 off</span>
                </div> */}
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png"
                    alt="Salon"
                  />
                </div>
                <div className="content_category">
                  <p>Water Purifier</p>
                </div>
                <div className="content_price">
                  <span>Up to 45% Off</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Washing Machine</p>
                </div>
                {/* <div className="content_price">
                  <span>Starts at ₹499</span>
                </div> */}
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
      <div className="backgrount"></div>

      {/* ========================Clean & Pest Control========================================== */}
      <div className="bestdeal_slider">slider part</div>
      <div className="backgrount"></div>

      {/* ========================Clean & Pest Control Image========================================== */}
      <div className="bestdeal_image">
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1602763387610-2c1c7e.jpeg"
          alt="best_offer"
        />
      </div>
      <div className="backgrount"></div>
      {/* ========================Clean & Pest Control========================================== */}
      <div className="bestdeal_offer">
        <div className="offer_text">
          <h1>Home Repairs</h1>
        </div>
        <div className="appliances_content">
          <SimpleGrid columns={[1, 2, 2, 3]} spacing="50px">
            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg"
                    alt="Carpenters"
                  />
                </div>
                <div className="content_category">
                  <p>Carpenters</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg"
                    alt="Electricians"
                  />
                </div>
                <div className="content_category">
                  <p>Electricians</p>
                </div>
              </div>
            </Box>

            <Box>
              <div className="content_box">
                <div className="content_img">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg"
                    alt="Massage"
                  />
                </div>
                <div className="content_category">
                  <p>Plumbers</p>
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
