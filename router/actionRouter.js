const express = require('express')
const router = express.Router();
// const router = require('express').Router();
const Actions = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
  Actions
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the action',
      });
    });
});


router.get('/:id', (req, res, next) => {
  Actions
    .get(req.params.id)
    .then(action=> {
      res.status(200).json(action)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Error retrieving the Actions.'
      })
    })
})

router.post('/', (req, res)=>{
  Actions
    .insert(req.body)
    .then(action => {
      res.status(201).json(action)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error adding the action',
      });
    });
})

router.delete('/:id', (req, res) => {
  Actions
    .remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The action has been nuked' });
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error removing the action',
      });
    });
  });

router.put('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const updateProject = await Actions.update(id, req.body)
    res.status(201).json({ data: updateProject})
  } catch {
    res.status(500).json({
      message: 'Error removing the action',
    });
  }
})

module.exports = router;