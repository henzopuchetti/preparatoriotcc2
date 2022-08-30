//importar o pacote express
const express = require("express")
//executar o express application
const app = express()

//configurar a porta remota e local
const porta = process.env.PORT || 3000

//importar o pacote consign
const consign = require("consign")

//definir o express com unlercoded
app.use(express.urlencoded({extended:false}))


//executar e configurar o consign
consign().include("./routes").into(app)

//definir a pasta dps assets(css,images,js)
app.use(express.static("./src/"))


//definir os conteudos com acesso externo
module.exports = {app,porta}
