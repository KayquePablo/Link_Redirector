const mongoose = require('mongoose');

//criando o esquema do meu documento, molde de informacoes(estrutura).
const linkSchema = new mongoose.Schema({ 
    title: {type: String, required: true}, // aqui estou passando que é obrigatório ter um titulo
    description: String,
    url: {type: String, required: true}, // Mesma coisa do titulo.
    click: {type: Number, default: 0} //valor padrao inicial
})

//Criando meu modelo, ou seja, uma coleção aonde todos segue o molde do esquema(linkSchema)
module.exports = mongoose.model('Link', linkSchema) 
