import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {

    const Customs = {
        color:"white",
        fontSize:"1.3rem",
        marginRight:"0.5rem"
    }

  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} style={Customs}/>
        <span style={Customs}>0</span>
    </div>
  )
}

export default CartWidget