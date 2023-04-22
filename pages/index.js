import React, { useState } from 'react'
const index = () => {
  const [name, setName] = useState("Tarun Patidar")
const [date, setDate]= useState(new Date().toLocaleTimeString());
const [fnme, setFname]= useState('Mr. Sundarlal ji')

setInterval(() => {
  setDate(new Date().toLocaleTimeString())
}, 1000);
  const changeHandler=()=>{
    console.log("Inside ChangedHandler");
    setName('Shinudaaaa')
  }

  const chaneFname=()=>{
    setFname('My PitaShree')
  }
  return (
    <div>
      <h1>{name}</h1>
      {date}
      <h1 onClick={chaneFname}>{fnme}</h1>
      <button onClick={changeHandler}>Change Name</button>
    </div>
  )
}

export default index;