import React from 'react'

const BlogCards = ({beautyData}) => {

    console.log(beautyData)
    const {name,id,image_link,description}= beautyData
  return (
    <div className='blog_single_card' key={id}>
         <div className='single_card_img_div'>
         <img src={image_link} alt="" /></div>
         <div className='single_card_des_div'>
         <h1>{name}</h1>
         {description}
         </div>
    
    
    </div>
  )
}

export default BlogCards