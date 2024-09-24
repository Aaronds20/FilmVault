import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';
import Pagination from './Pagination';

function Movies({handleAddtoWatchlist, handleRemoveFromWatchlist,watchlist}) {
  const[movies,setMovies]=useState([])

  const[PageNo,setPageNo]=useState(1)

  const handlePrev=()=>{
    if (PageNo===1) {
      setPageNo(PageNo)
    }else{
    setPageNo(PageNo-1)
    }
  }

  const handleNext=()=>{
    setPageNo(PageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=366da2c5ebb10dae11a286cbc4a7a68d&language=en-US&page=${PageNo}`).then(function(res){
      setMovies(res.data.results)
    })
  },[PageNo])

  return (
    <div className='p-5'>
        <div className='text-center text-2xl font-bold'>
          Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around gap-8'>
          {movies.map((movieObj)=>{
            return <MovieCard key={movieObj.id} watchlist={watchlist} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
          })}
        </div>
        <Pagination PageNo={PageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}

export default Movies

