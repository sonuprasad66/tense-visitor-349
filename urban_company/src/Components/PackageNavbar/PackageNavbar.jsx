import React from 'react'

import BasicUsage from './P_modal'


const PackageNavbar = () => {


  const city = JSON.parse(localStorage.getItem("city")) || "Delhi"
  return (
    <div className='package_navbar'>
      
    <div className="P_left_div">
    <div className='P_logo_div'>
       <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category,w_36,dpr_1,fl_progressive:steep,q_auto/images/supply/customer-app-supply/1648463875565-a4ce06.svg" alt="" />

    </div>
    <div className='P_loco_div'>
    <h1>{city?  city: "Delhi"}</h1>
       <BasicUsage/>
                 
    

    </div>
    </div>

    <div className='P_right_div'>
    
 
    <a href="/service"> Home </a>
    <a href="/booking">Booking</a>
    <a href="/blog">Blog</a>

    </div>



    </div>
  )
}

export default PackageNavbar