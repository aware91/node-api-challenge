const express = require('express')
const router = express.Router();
// const router = require('express').Router();
const Projects = require('../data/helpers/projectModel.js');

router.get('/', (req, res) => {
  Projects
    .get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the Projects',
      });
    });
});

router.get('/:id', (req, res, next) => {
  Projects
    .get(req.params.id)
    .then(project=> {
      res.status(200).json(project)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Error retrieving the Projects.'
      })
    })
})

router.post('/', (req, res)=>{
  Projects
    .insert(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding the project',
      });
    });
})

module.exports = router;