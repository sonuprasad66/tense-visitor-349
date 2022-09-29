import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'

const Blog = () => {

    const [data,setData]= useState([])

const getBlogData=()=>{

 axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
.then((res)=>{
  setData(res.data)
    
})
.catch((err)=>{
    console.log(err)
})

}


// console.log(data)
useEffect(()=>{

getBlogData()

},[])








  return (
    <div className='myBlog'>
       <div className='blog_navbar'>
          <div className='blog_logo_div'>
             <img src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/24170311/TheUrbanGuideLogo_UrbanCompany_Transparent_Big-Copy-Copy.png" alt="logo" />
          </div>
        <div className='little_navbar'>
              <a href="">Beauty </a>
              <a href="">Men </a>
              <a href="">Interiors </a>
              <a href="">Lifestyles </a>
              <a href="">Humans of urban company </a>
              <a href="">inside urban company </a>
              <a href="">Tug videos </a>
              <a href="">urbancompany.com </a>
              <a href=""></a>
        </div>


       </div>

       <div className="beauty_image">
         <h1>Beauty</h1>
       </div>

       <div className='blog_cards'>

{
    data.map((item)=>(

        <BlogCards beautyData={item}/>
    ))
}
       
       </div>

      
    </div>
  )
}

export default Blog