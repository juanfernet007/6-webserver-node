require('dotenv').config()
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


//servir contenido estatico
app.use(express.static('public', {
  extensions : 'html', redirect : true
}));

//handlerbars para node.js (hbs)
app.set('view engine', 'hbs');

//registro de parciales
hbs.registerPartials(__dirname + '/views/partials');

//servir pagina hbs, enviandole parámetros
app.get('/', (req, res) => {
  res.render('home',{
    nombre : 'Juan Fernando Arango',
    titulo : 'Cursito de Node.js'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre : 'Juan Fernando Arango',
    titulo : 'Cursito de Node.js'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre : 'Juan Fernando Arango',
    titulo : 'Cursito de Node.js'
  });
})


app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.get('/hola-mundo', (req, res) => {
  res.send('hola mundo sabroso!!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})