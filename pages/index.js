import React, { useEffect, useState } from 'react'

const index = () => {
const [images, setImages] = useState(null)
  const Getimages=async()=>{
    const imgstr=await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    const json=await imgstr.json();
    setImages(json)
  }
  console.log(images)
  // console.log(JSON.stringify(images));
  useEffect(()=>{
    Getimages()
  },[])
  return (
    <div>
      <button onClick={Getimages}>Get Images</button>
      <br />
     {images ? JSON.stringify(images):"Loading...."}

    </div>
  )
}

export default index;