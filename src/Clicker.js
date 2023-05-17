import React from 'react'

const Clicker = ({onClicked}) => {
    
    const handleClick = (message) => {
    console.log(message)
   }

   return (
    <div>
        <button onClick={() => onClicked("Up") }>Up</button>
        <button onClick={() => handleClick("Down") }>Down</button>
    </div>
   )
}

export default Clicker;