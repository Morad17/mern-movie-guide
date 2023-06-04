import React, { useEffect, useState } from 'react'
import axios from 'axios'

import MovieCard from '../components/MovieCard'

const Home = () => {
    const [movieData, getMovieData ] = useState(null)

    const getAllMoviesData = () => {
        axios.get(process.env.REACT_APP_MOVIES_URL)
            .then((res) => {
                const result = res.data.results
                getMovieData(result)
                console.log(result)
            })
            .catch((err)=> {
                err = new Error()
            })
        }
        
    useEffect(()=> {
            getAllMoviesData()
        }, [])

  return (
    <div className='home'>
        <div className="all-movies">
            {
               movieData ? movieData.map((movie, key)=> {return <MovieCard movie={movie} key={key} />}) : <div className="">Loading</div>
            }
        </div>
    </div>
  )
}

export default Home