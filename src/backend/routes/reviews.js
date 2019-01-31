const express = require('express');
const axios = require('axios');

const router = express.Router();
const config = require('./../config')

router.get('/:query', function(req, res, next) {
  const { params } = req
  const { query } = params
  const url = `${config.API_URL}?query=${query}&api-key=${config.API_KEY}`
  axios.get(url)
    .then(response => {
      const { data } = response
      const { results } = data
      res.json(results)
    })
    .catch(err => {
      res.json(err)
    })
});

module.exports = router;
