// Importando dependencias
const express = require('express') // Express vai nos ajudar a construir um servidor enxuto
const nunjucks = require('nunjucks') // Template engine para reuso de codigo
const routes = require('./routes')

// Armazenando a funcao express em server
const server = express()

// Para habilitar requisicao por body
server.use(express.urlencoded({ extended: true }))

// Configurando o express para usar arquivos estaticos da pasta public
server.use(express.static('public'))

// Rotas
server.use(routes)

// Configuracao da template engine nunjucks (njk sao arquivos do nunjucks)
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false, // Permite mandar html por variavel
    noCache: true
})

// Servidor ouvindo porta 5000 e callback function 
server.listen(5000, function () {
    console.log('Server is running')
})