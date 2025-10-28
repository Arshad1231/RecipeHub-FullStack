import React, { useEffect } from 'react'
import { useState } from 'react'

const ErrorPage = () => {
    const [response,Setresponse]=useState("")
    useEffect(()=>{
        fetch(`http://localhost:3030${window.location.pathname}`)
        .then(async(res)=>{
            const data = await res.json();
            Setresponse(data.message)
        })
        .catch(()=>{
            console.log("Error has Occured")
        })
    })
  return (
    <div>
        {`${response}`}
    </div>
  )
}

export default ErrorPage
