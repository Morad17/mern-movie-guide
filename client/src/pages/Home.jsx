import React, { useEffect, useState } from 'react'
import axios from 'axios'

import MovieCard from '../components/MovieCard'

const Home = () => {
    const [movieData, getMovieData ] = useState(null)
    const [loading, setLoading ] = useState(true)

    const getAllMoviesData = () => {
        axios.get(process.env.REACT_APP_MOVIES_URL)
            .then((res) => {
                const result = res.data.results
                getMovieData(result)
                console.log(result)
                setLoading(false)
            })
            .catch((err)=> {
                err = new Error()
            })
        }
        
    useEffect(()=> {
            getAllMoviesData()
        }, [])

    if (loading) return <h1>Loading</h1>

  return (
    <div className='home'>
        <div className="all-movies">
            {
               loading ? <h1 className="">Loading</h1> : movieData.map((movie, key)=> {return <MovieCard movie={movie} key={key} />})
            }
        </div>
    </div>
  )
}

export default Home