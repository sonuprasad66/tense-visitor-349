import React from 'react'

const BlogCards = ({beautyData}) => {

    // console.log(beautyData)
    const {id,image_link,description}= beautyData
  return (
    <div className='blog_single_card' id={id}>

        <h1>{description}</h1>
    
    
    </div>
  )
}

export default BlogCards