const mongoose = require('./init')

const Announcement = mongoose.model('Announcement', {
    subject: String,
    content: {any: {} }, // "anything goes", could be better to be explicit about what we want from contentState
})

module.exports = Announcement