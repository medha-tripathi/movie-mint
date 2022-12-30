import React from 'react'
import { useGlobalContext } from './context'

export default function Search() {
  const {query,setQuery,isError}=useGlobalContext();
  return (
    <div style={{display:"flex",justifyContent:"center"}}> <form action='#' onSubmit={(e)=>{
      e.preventDefault()}}>
    <label className="w3-text-white w3-xlarge underline"><b>YOUR NEXT WATCH💬</b></label>
    <input className="w3-input w3-border w3-light-grey w3-text-black w3-large" placeholder='Search' type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/></form>
    <div>
      <h2>
      {isError.show && isError.msg}
      </h2>
    </div>
  </div>
  )
}
