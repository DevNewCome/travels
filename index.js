const express = require('express')
const app = express()
const expressHandleBars = require('express-handlebars')
const port = process.env.PORT || 3000
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')



//midleware para public
app.use(express.static(__dirname + '/public'))



// app get adiciona rotas
app.get('/', handlers.home)

app.get('/about', handlers.about)

// Página 404 personalizada
// custom 404 page
app.use(handlers.notFound)

// custom 500 page
app.use(handlers.serverError)


// Configura view engine

app.engine('handlebars', expressHandleBars.engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')















app.listen(port, () => console.log(
  `Conectou http://localhost:${port};` + ` press Control-C to terminate`
  ))