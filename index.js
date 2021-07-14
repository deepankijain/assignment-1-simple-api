const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 3000

//Express middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Home route
app.get('/home', (req, res) => {
  return res.json({
    Home: 'Home 🏠🏠🏠',
  })
})

//Movie route
app.get('/movie', (req, res) => {
  return res.json({
    Movie: 'Movie 🍿🍿🍿',
  })
})

//Cricket route
app.get('/cricket', (req, res) => {
  return res.json({
    Cricket: 'Cricket 🏏🏏🏏',
  })
})

//Update get route
app.get('/update', (req, res) => {
  fs.readFile('update.txt', 'utf-8', (err, data) => {
    if (err) {
      return res.send(
        'File not Found 🚫🚫🚫. Please send a post request first!!!',
      )
    }
    res.send(data)
  })
})

//Update post route
app.post('/update', (req, res) => {
  const data = req.body.data
  fs.writeFile('update.txt', data, (err) => {
    if (!err) res.send(data)
  })
})

//404 using middleware
app.use((req, res) => {
  res.status(404).send('Page not Found! 😢')
})

//404 display using get request
app.get('*', (req, res) => {
  res.status(404).send('what???')
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
