import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

export default function Movies() {
  const {movie,isLoading}=useGlobalContext();
  if(isLoading){
    return(
      <h1 className='w3-xxlarge underline' style={{ color:"white"}}>Loading</h1>
    )
  }
  return (
    <div>
      {
        movie.map((curMovie)=>{
          const{imdbID,Title,Poster}=curMovie;
          const moviename=Title.substring(0,10);
          return(
              <NavLink to={`movie/${imdbID}`}><div className="w3-third p-5" >
                <div className="w3-card border-8 w3-border-white transition ease-in-out delay-150 
                    bg-rgb(25,86,173) hover:-translate-y-1 hover:scale-110 hover:bg-black duration-150 drop-shadow-2xl" style={{ width: "25vw", height: "50vh"}}>
                  <img src={Poster} style={{ width: "100%", height: "100%" }} />
                  <div className="w3-container p-1">
                    <h4
                      style={{ color:"white"}}
                      className="w3-xxlarge underline"
                    >
                      {Title.length>10?`${moviename}...`:moviename}
                    </h4>
                  </div>
                </div>
              </div></NavLink>
          )
        })
      }
    </div>
  );
}
