const express= require('express');
const path= require('path');


const server = express();

server.get('/',(req,res)=>{
    return res.sendFile(__dirname+"/index.html")
})

server.get('/about',(req,res)=>{
    return res.send('<h1>About Page</h1>')
})

server.listen(1440,()=>{
    console.log('server started')
});