const qppp= require('http');
const fs= require('fs/promises')

const server= qppp.createServer(async (req,res)=>{
    console.log('request received');
    try{
        const data= await fs.readFile('./index.html');
        res.write(data);
        const cssData= await fs.readFile('./style.css');
        res.write(`<style>${cssData}</style>`)
        res.end();
    }
    catch(err){
        console.log('error loading file',err);
        res.end('error loading file');
    }
});

server.listen(1400,()=>{
    console.log('The server is running');
});
