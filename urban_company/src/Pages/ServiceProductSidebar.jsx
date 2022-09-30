import React from "react";
import "../styles/Services/ServiceProductSidebar.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";

export const ServiceProductSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        className="base_up_box"
      >
        <div className="base_up_box_content">
          <div className="up_img">
            <img
              src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
              alt="img"
            />
          </div>
          <span>Salon for Women</span>
        </div>
      </div>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Salon for Women</DrawerHeader>

          <DrawerBody>
            <Link to={"/package"}>
              <div className="single_product">
                <div className="prime_image">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg"
                    alt="pp"
                  />
                </div>

                <div className="prime">
                  <div className="prime_text">
                    <p>Salon Prime</p>
                  </div>

                  <div className="prime_icon">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/package">
              <div className="single_product">
                <div className="prime_image">
                  <img
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1603078787966-226e17.jpeg"
                    alt="pp"
                  />
                </div>

                <div className="prime">
                  <div className="prime_text">
                    <p>Salon Classic</p>
                  </div>

                  <div className="prime_icon">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
