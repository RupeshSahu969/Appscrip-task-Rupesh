import React, { useState } from 'react'
import ChaildData from './ChaildData'

// create prent and chaild page then if click chaild then show message in parent

const LiftState = () => {
    
    const[message,setMessage]=useState("")

  return (
    <div>
        <h2>Message : {message}</h2>
        <ChaildData onSend={setMessage} />
    </div>
  )
}

export default LiftState