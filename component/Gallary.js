import React, { useState ,useEffect } from 'react'

const Gallary = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("")
    useEffect(() => {
      console.log("Gallary Componemt Creted !");
    
      return () => {
        console.log("Gallary Component Deatroyed !!");
      }
    }, [])
    
  return (
    <div>
        <h1>Username:{username}</h1>
        <button onClick={()=> setUsername("john")}>Get Name</button> <hr />

        <h1>password:{password}</h1>

        <button onClick={()=> setPassword("John@doe.com")}>Get Password</button>

    </div>
  )
}

export default Gallary;