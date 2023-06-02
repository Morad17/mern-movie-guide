const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const WatchlistModel = require('./models/Watchlist')
const UserModel = require('./models/User')

app.use(express.json())
app.use(cors())


//mongoose connection uri
mongoose.connect(process.env.CONNECTION_URI)
{useNewUrlParser: true}

// create new watch list

app.post('/insert', async (req,res)=> {
    const filmId = req.body.filmId
    const watchList = new WatchlistModel({filmId:filmId})
    try{
        await watchList.save()
    }catch(err){
        console.log(err);
    }
})

//Sign Up
app.post('/signup', async (req, res)=> {
    res.json({message: 'signup user'})
})


// Login

app.listen(3001, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
 