/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// eslint-disable-next-line linebreak-style

// Express
const express = require('express');

const Router = express.Router();

const mongoose = require('mongoose');
require('../models/atleticaSchema');

const Atleticas = mongoose.model('atleticas');

// Routes
Router.get('/', async (req, res) => {
  const atleticas = await Atleticas.find();
  res.render('atleticas', { atleticas });
});


Router.get('/alfa', (req, res) => {
  res.render('atleticas/alfa');
});

Router.get('/guerreira', (req, res) => {
  res.render('atleticas/guerreira');
});

Router.get('/heroica', (req, res) => {
  res.render('atleticas/heroica');
});

Router.get('/impetuosa', (req, res) => {
  res.render('atleticas/impetuosa');
});

Router.get('/mercenaria', (req, res) => {
  res.render('atleticas/mercenaria');
});

Router.get('/nexus', (req, res) => {
  res.render('atleticas/nexus');
});

Router.get('/soberanos', (req, res) => {
  res.render('atleticas/soberanos');
});

Router.get('/suprema', (req, res) => {
  res.render('atleticas/suprema');
});

module.exports = Router;
