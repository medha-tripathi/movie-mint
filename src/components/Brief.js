import React,{useEffect,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'

const API=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}`;

export default function Brief() {
  const {id} = useParams();
  const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState("");
    const [isError,setIsError]=useState({show:"false",msg:""});

    const getMovies=async(url)=>{
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data)
            if (data.Response==="True"){
                setIsLoading(false);
                setIsError({
                    show:false,
                    msg:""
                })
                setMovie(data);
            }else{
                setIsError({
                    show:true,
                    msg:data.Error
                })
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        let timerOut= setTimeout(()=>{
            getMovies(`${API}&i=${id}`);
        },1000)
        return ()=>clearTimeout(timerOut)
    },[id]);

    if(isLoading){
      <h1>Loading</h1>
    }
  return (
    <div className="card mb-3 border-4 w3-border-white p-1" style={{color:"white",width:"60vw"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={movie.Poster} className="img-fluid rounded-start" alt={movie.Title} style={{ width: "100%", height: "100%" }}/>
    </div>
    <div className="col-md-8">
      <div className="card-body w3-xlarge">
        <h3 className="card-title w3-xlarge">Name:{movie.Title}</h3>
        <h3 className="card-title">Genre:{movie.Genre}</h3>
        <h3 className="card-title">Director:{movie.Director}</h3>
        <h3 className="card-title">Cast:{movie.Actors}</h3>
        <h3 className="card-title">Country:{movie.Country}</h3>
        <h3 className="card-title">Rating:{movie.imdbRating}/10</h3>
        <h3 className="card-title">Released:{movie.Released}</h3>
        <h3 className="card-title">Plot:{movie.Plot}</h3>
        <NavLink to="/" className="border-2 w3-border-white font-ssemibold hover:font-bold">Go Back</NavLink>
      </div>
    </div>
  </div>
</div>
  );
}
