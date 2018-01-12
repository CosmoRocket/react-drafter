const express = require('express')
const Announcement = require('../models/Announcement')
const router = new express.Router()

// Read list
router.get('/announcements', (req, res) => {
  Announcement.find()
    .then((announcements) => {
      res.json(announcements)
    })
    .catch((error) => {
      res.json({ error })
    })
})

// Create
router.post('/announcements', (req, res) => {
  Announcement.create(req.body)
    .then((announcement) => {
      res.status(201).json(announcement)
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
})

module.exports = router