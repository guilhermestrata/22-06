const servidor = require('./config/servidor')
const consign = require('consign')
const app = servidor.app
const porta = servidor.porta
consign().include('./routes').into(app)

app.listen(porta, ()=>{
    console.log('http://localhost:' + porta)
})
