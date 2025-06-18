import React, { useState } from "react"

const ConterApp=()=>{
    const [count,setCount]=useState(0)

    return(
        <div>
            
            <button onClick={(e)=> setCount(count+1)}> + </button>
            <h1>Count {count}</h1>
             <button disabled={count === 0} onClick={(e)=> setCount(count-1)}> - </button>
        </div>
    )
}

export default ConterApp