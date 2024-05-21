import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React from 'react'

const ItemListContainer = ({greeting}) => {
    const customsGreeting = {
        display: "flex",
        textAlign:"center",
        justifyContent: "center",
        alignItems:"center",
        margin:"auto",
        width:"100vh",
        height:"80vh",
        color:"white",
        fontsize:"2rem",

    }
  return (
    <div style={customsGreeting}>{greeting}</div>
  )
}

export default ItemListContainer