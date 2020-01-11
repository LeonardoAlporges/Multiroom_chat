/* Importa o express*/

var express = require('express');


/*Importa consigin*/

var consigin = require('consign');

/* import bordy parse*/
var bodyParser = require('body-parser');

/* import express validator*/
var expressValidator =  require('express-validator');

/* iniciar o objeto express*/
var app = express();

/* setar as variaveis 'views enginer' e 'view' do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*configura o middlerware express.static */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* Efetua o autoload das rotas dos modulos e dos controllers pra o objeto app*/
consigin()
    .include('./app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exporta o APP*/
module.exports = app;
