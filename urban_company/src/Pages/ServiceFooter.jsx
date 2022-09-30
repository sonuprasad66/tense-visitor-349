import React from "react";
import "../styles/Services/ServiceFooter.css";
import { SimpleGrid, Box } from "@chakra-ui/react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";

export const ServiceFooter = () => {
  return (
    <div className="footer_container">
      {/* ---------------------------footer top---------------------------------- */}

      <div className="footer_top">
        <ul className="Footer__countryName_ind">
          <li>
            <a href="https://www.urbancompany.com/about" target="_blank">
              About Us
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/impact" target="_blank">
              UC Impact
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/terms" target="_blank">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a
              href="https://www.urbancompany.com/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://www.urbancompany.com/privacy-policy"
              target="_blank"
            >
              Interest-Based Advertising
            </a>
          </li>
          <li>
            <a
              href="https://www.urbancompany.com/anti-discrimination-policy"
              target="_blank"
            >
              Anti Discrimination Policy
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/blog" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/reviews" target="_blank">
              Reviews
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/near-me" target="_blank">
              Near Me
            </a>
          </li>
          <li>
            <a href="https://careers.urbanclap.com/" target="_blank">
              Careers
            </a>
          </li>
          <li>
            <a
              href="https://www.urbancompany.com/purchase-giftcards"
              target="_blank"
            >
              Gift Cards
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/contact-us" target="_blank">
              Contact Us
            </a>
          </li>
          <li>
            <a href="https://www.urbancompany.com/quick-links" target="_blank">
              Quick Links
            </a>
          </li>
        </ul>
      </div>
      {/* ----------------------------footer_mid--------------------------------- */}
      <div className="footer_mid">
        <div class="Footer__basicRow2">
          <p>Serving in</p>
          <ul class="Footer__countriesRoot">
            <li>
              <span class="Footer__countryName">USA</span>
              <ul>
                <li>
                  <a href="https://www.urbancompany.com/austin" target="_blank">
                    Austin
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/dallas" target="_blank">
                    Dallas
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/new-york-city"
                    target="_blank"
                  >
                    New York City
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span>IND</span>
              <ul class="Footer__countryName_ind">
                <li>
                  <a href="https://www.urbancompany.com/agra" target="_blank">
                    Agra
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/ahmedabad"
                    target="_blank"
                  >
                    Ahmedabad
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/alwar" target="_blank">
                    Alwar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/amritsar"
                    target="_blank"
                  >
                    Amritsar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/aurangabad"
                    target="_blank"
                  >
                    Aurangabad
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/bangalore"
                    target="_blank"
                  >
                    Bangalore
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/bhopal" target="_blank">
                    Bhopal
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/bhubaneswar"
                    target="_blank"
                  >
                    Bhubaneswar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/chandigarh"
                    target="_blank"
                  >
                    Chandigarh Tricity
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/chennai"
                    target="_blank"
                  >
                    Chennai
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/coimbatore"
                    target="_blank"
                  >
                    Coimbatore
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/cuttack"
                    target="_blank"
                  >
                    Cuttack
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/dehradun"
                    target="_blank"
                  >
                    Dehradun
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/delhi-ncr"
                    target="_blank"
                  >
                    Delhi NCR
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/guntur" target="_blank">
                    Guntur
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/guwahati"
                    target="_blank"
                  >
                    Guwahati
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/gwalior"
                    target="_blank"
                  >
                    Gwalior
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/hyderabad"
                    target="_blank"
                  >
                    Hyderabad
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/indore" target="_blank">
                    Indore
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/jabalpur"
                    target="_blank"
                  >
                    Jabalpur
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/jaipur" target="_blank">
                    Jaipur
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/jamshedpur"
                    target="_blank"
                  >
                    Jamshedpur
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/jodhpur"
                    target="_blank"
                  >
                    Jodhpur
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/kakinada"
                    target="_blank"
                  >
                    Kakinada
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/kanpur" target="_blank">
                    Kanpur
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/karnal" target="_blank">
                    Karnal
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/kochi" target="_blank">
                    Kochi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/kolkata"
                    target="_blank"
                  >
                    Kolkata
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/kota" target="_blank">
                    Kota
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/lucknow"
                    target="_blank"
                  >
                    Lucknow
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/ludhiana"
                    target="_blank"
                  >
                    Ludhiana
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/madurai"
                    target="_blank"
                  >
                    Madurai
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/meerut" target="_blank">
                    Meerut
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/mumbai" target="_blank">
                    Mumbai
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/mysore" target="_blank">
                    Mysore
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/nagpur" target="_blank">
                    Nagpur
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/nashik" target="_blank">
                    Nashik
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/panipat"
                    target="_blank"
                  >
                    Panipat
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/patna" target="_blank">
                    Patna
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/prayagraj"
                    target="_blank"
                  >
                    Prayagraj
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/pune" target="_blank">
                    Pune
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/raipur" target="_blank">
                    Raipur
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/rajahmundry"
                    target="_blank"
                  >
                    Rajahmundry
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/ranchi" target="_blank">
                    Ranchi
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/rohtak" target="_blank">
                    Rohtak
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/sonipat"
                    target="_blank"
                  >
                    Sonipat
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/surat" target="_blank">
                    Surat
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/thiruvananthapuram"
                    target="_blank"
                  >
                    Thiruvananthapuram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/udaipur"
                    target="_blank"
                  >
                    Udaipur
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/vadodara"
                    target="_blank"
                  >
                    Vadodara
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/varanasi"
                    target="_blank"
                  >
                    Varanasi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/vijayawada"
                    target="_blank"
                  >
                    Vijayawada
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/visakhapatnam"
                    target="_blank"
                  >
                    Visakhapatnam
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/warangal"
                    target="_blank"
                  >
                    Warangal
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">UAE</span>
              <ul>
                <li>
                  <a
                    href="https://www.urbancompany.com/abudhabi"
                    target="_blank"
                  >
                    Abu Dhabi
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/dubai" target="_blank">
                    Dubai
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.urbancompany.com/sharjah"
                    target="_blank"
                  >
                    Sharjah
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">AUS</span>
              <ul>
                <li>
                  <a
                    href="https://www.urbancompany.com/melbourne"
                    target="_blank"
                  >
                    Melbourne
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/sydney" target="_blank">
                    Sydney
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">SGP</span>
              <ul>
                <li>
                  <a
                    href="https://www.urbancompany.com/singapore"
                    target="_blank"
                  >
                    Singapore
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span class="Footer__countryName--3Czg4">KSA</span>
              <ul>
                <li>
                  <a href="https://www.urbancompany.com/jeddah" target="_blank">
                    Jeddah
                  </a>
                </li>
                <li>
                  <a href="https://www.urbancompany.com/riyadh" target="_blank">
                    Riyadh
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* ------------------------------footer ottom------------------------------- */}

      <div className="footer_bottom">
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px">
          <Box>
            <div className="f_logo">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                alt="footerlogo"
              />
            </div>
          </Box>
          <Box>
            <div className="copy_right">
              <span>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</span>
            </div>
          </Box>
          <Box>
            <div className="footer_icons">
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaFacebookSquare />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaPinterestP />
              </div>
            </div>
          </Box>
          <Box>
            <div className="footer_store">
              <img
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
                alt="pstore"
              />
              <img
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
                alt="astore"
              />
            </div>
          </Box>
        </SimpleGrid>
      </div>
      {/* ------------------------------------------------------------- */}
    </div>
  );
};
