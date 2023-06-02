import React, { useEffect, useState } from 'react'
import axios from 'axios'

import MovieCard from '../components/MovieCard'

const Home = () => {
    const [movieData, getMovieData ] = useState(null)

    const getAllMoviesData = () => {
        axios.get(process.env.REACT_APP_MOVIES_URL)
            .then((res) => {
                const movieData = res.data.results
                getMovieData(movieData)
                console.log(movieData)
            })
            .catch((err)=> {
                console.log(err);
            })

        useEffect(()=> {
            getAllMoviesData()
        }, [])
    }

  return (
    <div className='home'>
        <div className="all-movies">
            {
                movieData?.map((movie, index)=> {return <MovieCard movie={movie} key={index} />})
            }
        </div>
    </div>
  )
}

export default Home