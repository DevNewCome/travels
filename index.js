const express = require('express')
const app = express()
const expressHandleBars = require('express-handlebars')
const port = process.env.PORT || 3000

//midleware para public
app.use(express.static(__dirname + '/public'))

// app get adiciona rotas
app.get('/', (req, res)=>{
  res.render('home')
})

 app.get('/about', (req,res)=>{
  const randomFortune = fortune[Math.floor(Math.random()*fortune.length)]
 res.render('about', {fortune: randomFortune})
})

// Configura view engine

app.engine('handlebars', expressHandleBars.engine({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')




// Página 404 personalizada
app.use((req, res) =>{
  res.status(404)
  res.render('404')
})

// Página 500 personalizada
app.use((err, req, res, next)=>{
  console.error(err.message)
  res.status(500)
  res.render('500')
})

const fortune = [
  "gemidos",
  "Bola",
  "Casa",
  "Dado",
  "Elefante",
  "Fogo",
  "Gado",
]










app.listen(port, () => console.log(
  `Conectou http://localhost:${port};` + ` press Control-C to terminate`
  ))