import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='text-white w3-xlarge underline'>THIS PAGE IS NOT FOUND 
    <h1>404 error!!</h1>
    <NavLink to="/" className="border-2 w3-border-white font-ssemibold hover:font-bold">CLICK TO GO BACK TO HOME PAGE</NavLink></div>
  )
}
