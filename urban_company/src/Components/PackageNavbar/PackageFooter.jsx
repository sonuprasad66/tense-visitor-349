import React from 'react'
// import { RiTwitterLine } from "react-icons/Ri";
import { FiInstagram ,FiTwitter,FiFacebook} from "react-icons/fi";

const PackageFooter = () => {

// up to date
//deleted node modules


  return (
    <div className='package_footer'>
    <div className="footer_logo">
    <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_144,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1648471968852-1f2b01.png" alt="" />
    </div>

    <div className='footer_down_div'>
          <div className='footer_table'>
             <ul style={{
              listStyle:"none"
             }}>
             <b style={{
              fontWeight:"bold",
              fontSize:"24px"
             }}>
             Company
             </b> 
             <li>About us</li>
             <li>Terms & conditions</li>
             <li>Privacy policy</li>
             <li>Anti discriminition poloicy</li>
             <li>UC impact</li>
             <li>Careers</li>
             </ul>
          
          </div>
          <div className='footer_table'>
          <ul style={{
            listStyle:"none"
           }}>
           <b style={{
            fontWeight:"bold",
            fontSize:"24px"
           }}>
           For customers
           </b> 
           <li>UC reviews</li>
           <li>Category near you</li>
           <li>Blog</li>
           <li>Contacts us</li>
          
           </ul>
        
          </div>
          <div className='footer_table'>
          
          <ul style={{
            listStyle:"none"
           }}>
           <b style={{
            fontWeight:"bold",
            fontSize:"24px"
           }}>
           For partners
           </b> 
           <li>Register as a professional</li>
          
           </ul>
        </div>
          <div className='footer_table'>
          
          <ul style={{
            listStyle:"none"
           }}>
           <b style={{
            fontWeight:"bold",
            fontSize:"24px"
           }}>
           Social links
           </b> 
           <div className="social_logo">
           
        <FiTwitter/>
        
           <FiInstagram/>
           <FiFacebook/>
         
           
           </div>
           <div className="social_logo"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1648463870745-38fece.png" alt="" /></div>
           <div className="social_logo">
           <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_108,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1648463880397-b2cc52.svg" alt="" /></div>
           </ul>
        </div>

    </div>
    
    
    </div>
  )
}

export default PackageFooter