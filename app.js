const express = require('express');
const mongoose = require('mongoose');
const linkRoutes = require('./routes/linkRoutes')
const path = require('path')
const app = express();
const port = 3000


// //add documento no meu modelo
// let link = new Link({ 
//     title: "Kayque Pablo - Instagram",
//     description: "Link Instagram",
//     url: "https://www.instagram.com/kayquepablo_gtr/",
// })


// //chamando o metodo para colocar o "link" no bando de dados.
// link.save().then(doc => { 
//     console.log(doc); //se deu tudo certo, o "then" vai retornar o doc
// }).catch(err => {
//     console.log(err); // se der algum erro vem para o "catch"
// })


//conectando com meu bando de dados do mongo
mongoose.connect('mongodb://localhost/links', (err, db) => {  
    console.log(err);
    console.log("Banco de Dados Carregado!");
    // console.log(db); // mando imprimir meu banco  
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoutes);


app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})