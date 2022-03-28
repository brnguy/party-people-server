const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    title: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    date: Date,
    description: String,
    category: String,
    image: String,
    attendees:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    host: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
  })

module.exports = mongoose.model('Event', EventSchema)