import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services/ServiceHomePage.css";
import { ServiceSidebar } from "./ServiceSidebar";
import { FaSistrix, FaAngleDown } from "react-icons/fa";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { ServiceProductSidebar } from "./ServiceProductSidebar";

export const ServiceHomePage = () => {
  const handleProductSidebar = () => {
    // <ServiceProductSidebar />;
  };

  return (
    <div className="main_container">
      <div className="home_container">
        <div className="home_top">
          <div className="home_top_loge">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              alt="logo"
            />
          </div>

          <div className="home_top_right">
            <ul>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link className="register_professional">
                  Register as a Professional
                </Link>
              </li>
              <li>
                <ServiceSidebar />
              </li>
            </ul>
          </div>
        </div>

        <div className="home_bottom">
          <div className="home_bottom_text1">
            <p>
              <span>Home</span> / <span>delhi-ncr</span>
            </p>
          </div>
          <div className="home_bottom_text2">
            <h1>Home services, on demand.</h1>
          </div>
          {/* ---------------------------------Search Box------------------------------------------- */}
          <div className="home_bottom_text3">
            <div className="select_country">
              <div className="select_img">
                <img
                  src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_template/images/supply/partner-app-supply/1661338258375-6c99b1.png"
                  alt="flag"
                />
              </div>
              <div>
                <p>Delhi NCR</p>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div className="search_country">
              <div className="search_icon">
                <FaSistrix />
              </div>
              <div className="search_input_box">
                <input type="text" placeholder="Search for services" />
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="home_bottom_text4">
            <p>
              <span>
                <Link>Women's Therapies,</Link>
              </span>
              <span>
                <Link>Salon for Men,</Link>
              </span>
              <span>
                <Link>Men's Therapies,</Link>
              </span>
              <span> etc</span>
            </p>
          </div>
        </div>
      </div>
      {/* ================================================================================= */}
      <div className="home_base">
        <div className="home_base_up">
          <SimpleGrid columns={[2, 3, 4, 5]} spacing="10px">
            <Box>
              <ServiceProductSidebar />
              {/* <div className="base_up_box" onClick={handleProductSidebar}>
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
                      alt="img"
                    />
                  </div>
                  <span>Salon for Women</span>
                </div>
              </div> */}
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png"
                      alt="img"
                    />
                  </div>
                  <span>Hair, Skin & Nails</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
                      alt="img"
                    />
                  </div>
                  <span>Women's Therapies</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
                      alt="img"
                    />
                  </div>
                  <span>Salon for Men</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
                      alt="img"
                    />
                  </div>
                  <span>Men's Therapies</span>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
        {/* -------------------------------------------------------------- */}
        <div className="home_service_header">
          <h1>Home Services</h1>
        </div>
        {/* ---------------------------------------------------------------------------- */}
        <div className="home_base_down">
          <SimpleGrid columns={[2, 3, 4, 5]} spacing="10px">
            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"
                      alt="img"
                    />
                  </div>
                  <span>Appliance Repair</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"
                      alt="img"
                    />
                  </div>
                  <span>Home Painting</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"
                      alt="img"
                    />
                  </div>
                  <span>Cleaning & Pest</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png"
                      alt="img"
                    />
                  </div>
                  <span>Disinfection</span>
                </div>
              </div>
            </Box>

            <Box>
              <div className="base_up_box">
                <div className="base_up_box_content">
                  <div className="up_img">
                    <img
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"
                      alt="img"
                    />
                  </div>
                  <span>Home Repairs</span>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
