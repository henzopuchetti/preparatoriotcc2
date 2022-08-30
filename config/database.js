const mongoose = require("mongoose")

const conexao = async()=>{
    const atlas = await mongoose.connect("mongodb+srv://user3tri:henzo123@fiaptecnico.jioi3.mongodb.net/test")
}

const modelo = mongoose.Schema({
    estilo:String,
    imagem:String,
    titulo:String,
    texto:String,
    publicado:{type:Date, default:Date.now}
})

