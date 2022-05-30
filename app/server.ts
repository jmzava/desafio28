import 'dotenv/config'
import express from 'express'
import app from './src/app'


// desafio 28

import minimist from "minimist";
import { fork } from "child_process";

const args = minimist(process.argv.slice(2));

//



app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

declare module 'express-session' {
    interface SessionData {
        nombreUsuario:string
    }
}



const PORT =  args._[0] || process.env.PORT || 8080


app
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err))
    