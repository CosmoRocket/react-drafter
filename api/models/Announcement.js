const mongoose = require('./init')

const announcementSchema = new mongoose.Schema({
    subject: String,
    contentData: String,
},
{
    timestamps: true
})

const Announcement = mongoose.model('Announcement', announcementSchema)

module.exports = Announcement