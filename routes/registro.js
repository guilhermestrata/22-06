module.exports = (app)=>{
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })
    app.post('/registro', async(req,res)=>{
        var dados = req.body

        var database = require("../config/database")()
        
        var usuarios = require("../models/usuarios")

        var verificar = await usuarios.findOne({email:dados.email})

        if(verificar){
            return res.send('email already in use')
        }

        var cript = require('bcryptjs')
        var senhasafe = await cript.hash(dados.senha,10)

        var documento = await new usuarios({
            nome:dados.name,
            email:dados.email,
            senha:senhasafe
        }).save()
        res.redirect("/login")
    })  
}
