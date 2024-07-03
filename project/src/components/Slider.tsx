import React, { useState } from 'react'

function Slider( props: { images: string[] } ) {
  
  const [bigImage, setBigImage] = useState(props.images[0])  

  return (
    <>
        <img src={bigImage} className='img-fluid' />
        { props.images.map((item, index) => 
            <img onClick={()=> setBigImage(item)} src={item} className='img-thumbnail' width={100}/>
        )}
    </>
  )
}

export default Slider