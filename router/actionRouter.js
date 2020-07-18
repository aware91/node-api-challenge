const express = require('express')
const router = express.Router();
// const router = require('express').Router();
const Project = require('../data/helpers/projectModel.js');

router.get('/', (req, res, next) => {
  Project
    .get(req.body)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Error retrieving the Projects.'
      })
    })
})

module.exports = router;