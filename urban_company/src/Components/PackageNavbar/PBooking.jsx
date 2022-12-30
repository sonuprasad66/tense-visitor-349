import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'

const PBooking = () => {



const handleSrvBtn=()=>{
  window.location.href="/package"
}
const goService=()=>{
  window.location.href="/service"
}

  const mybooking= JSON.parse(localStorage.getItem("bookedData")) 

 console.log(mybooking)

    return (
      <>
      <div className='package_navbar'>
      
      <div className="P_left_div">
   
      <div onClick={goService}  className='B_logo_div'>
      <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/partner-training/1628575858610-5b0ae4.png" alt="" />
      
      </div>
      
      <div className='P_loco_div'>
    

                   
      
  
      </div>
      </div>
  
      <div className='P_right_div'>
      
   
      <a href="/blog"> Blog </a>
      <a href="">Register As Professional</a>
      <a href="">My Bookings</a>
      <a href="/"> Logout</a>

  
      </div>
  
  
  
      </div>

<div className='mybooking_div'>
<h1 style={{
  fontWeight:"bolder",
  fontSize:"25px"
}}>My Bookings</h1>

<div className='B_tab'>
<Tabs variant='unstyled'>
  <TabList className='tablist'>
    <Tab _selected={{ color: 'white', bg: 'black' ,fontWeight:"bold"}}
    style={{
      fontWeight:"bold",
      fontSize:"18px"
    }}
    >ONGOING</Tab>
    <Tab _selected={{ color: 'white', bg: 'black',fontWeight:"bold" }}
    style={{
      fontWeight:"bold",
      fontSize:"18px"
    }}
    >HISTORY</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>

    {

      
      mybooking ? (

      <div className='booking_div' >
      
      <img  src={mybooking.img} alt="" />
      <h2> <span style={{
        fontWeight:"bold",
        
      }}>
      Professional's Name:
      </span>  {mybooking.name}</h2>
      <h2>
      <span style={{
        fontWeight:"bold"
      }}>Service: </span>  
      {mybooking.para}</h2>
      <h2>
      <span style={{
        fontWeight:"bold"
      }}>Time: </span>
      {mybooking.time}</h2>
      
      
      </div>):" You havn't book anything"
    }
     
    </TabPanel>
    <TabPanel>
      <p>Blank..</p>
    </TabPanel>
  </TabPanels>
</Tabs>

</div>


<div className='B_service_btn'>
<button onClick={handleSrvBtn}>
Book a srvice</button></div>

</div>

</>
    )
  
}

export default PBooking