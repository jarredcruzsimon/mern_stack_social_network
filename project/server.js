const app=require('express')()
const server = require('http').Server(app)
const next=require('next')
const dev= process.env.NODE_ENV!=='production'
const nextApp=next({dev})
const handle=nextApp.getRequestHandler()
require('dotenv').config()
const connectDb=require('./utilsServer/connectDb.js')
const PORT=process.env.PORT || 3000
connectDb()

nextApp.prepare()
.then(()=>{
    app.all("*",(req,res) => handle(req,res))

    server.listen(PORT,err=>{
        if(err){
             throw err
        }else{
            console.log(`Express server running on ${PORT}`)
        }
    })
})