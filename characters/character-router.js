const express = require('express')
const chars = require('./character-model')
const router = express.Router()


router.post("/", async (req, res, next) => {
    try {
        const saved = await chars.insert(req.body);
        res.status(201).json(saved);
    } catch (error) {
      next(error)
    }
  })