const express = require("express");
const chars = require("./character-model");
const router = express.Router();

router.get("/allcharacters", (req, res) => {
  chars
    .find()
    .then(char => {
      res.json(char);
    })
    .catch(err => res.json(err));
});

router.post("/addcharacter", async (req, res, next) => {
  try {
    const saved = await chars.insert(req.body);
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
});

router.delete("/removecharacter", (req, res, next) => {
  const gone = chars.remove()
  res.json
})

module.exports = router;
