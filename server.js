// Require modules and declare constants
const express    = require('express')
const app        = express()
const handlebars = require('express-handlebars')
const path       = require('path')
const mongoose   = require('mongoose')
const bodyParser = require('body-parser')
const port       = process.env.PORT || 8080

// Setup bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup MongoDB
mongoose.connect('mongodb://localhost/Sharenify')
const User = require('./app/models/user')

// Setup Handlebars
app.engine('.hbs', handlebars({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, './app/views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, './app/views'))

// Include REST API routes
const routes = require('./app/api/routes/userRoutes')
routes(app)

// Actually start the server
app.listen(port, (err) => {
  if (err) {
    return console.log(`error: ${err}`)
  }
  console.log(`server started on ${port}`)
})
