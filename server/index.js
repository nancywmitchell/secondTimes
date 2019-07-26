'use strict'

const express = require('express')
const path = require('path')
const volleyball = require('volleyball')
const poshmark = require('../poshmark')

const app = express()

// logging middleware
app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static middleware
app.use(express.static(path.join(__dirname, '../public')))

//app.use('/api', require('./api')) // include our routes!

// this is the route that is going to get the stuff from the thing
app.post('/getItems', async (req, res, next) => {
  console.log('oh look you called the route')
  console.log('request body ', req.body)

  let brand = req.body.brand
  console.log('brand is ', brand)
  let description = req.body.description
  console.log('description is ', description)

  let data = await poshmark(brand, description)
  // console.log(data)

  res.send(data)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app