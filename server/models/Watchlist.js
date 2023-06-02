const mongoose = require('mongoose')

const WatchlistSchema = new mongoose.Schema({
    filmId: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("Watchlists", WatchlistSchema)