import React from 'react'

const ChaildData = ({onSend}) => {
  return (
    <div>ChaildData
        <button onClick={()=>onSend(`Hello chaild`)}>Send Message</button>
    </div>
  )
}

export default ChaildData