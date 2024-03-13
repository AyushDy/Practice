const http= require('http');
const fs= require('fs');
const url= require('url');


let dataString= fs.readFileSync('./card.html','utf-8');
let dataString2=dataString;
let itemString=fs.readFileSync('./product.html','utf-8');
let itemString2=itemString;

let dummyData=[];
        
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=>dummyData=data.products)
.catch(err=>console.log)

const server= http.createServer((req,res)=>{
    const log= `${Date.now()}: ${req.url} Requested \n`;
    if(req.url!='/favicon.ico'){
    fs.appendFileSync('log.txt',log)
    }
    const route= url.parse(req.url,true);
    switch(route.pathname){
        case '/':{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<style>${fs.readFileSync('./style.css', 'utf-8')}</style>` +'<div style="background-color:black;display:flex;align-items:center;justify-content:center;height:100vh;color:white;flex-direction:column"><h1>Welcome to products page</h1><a href="products" style="padding:10px 20px;text-decoration:none;background-color:gray;">View Products</a>');
            break; 
        }
        case '/products':{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            dummyData.forEach(ele=>{
                dataString=dataString.replace('[@-image-@]',ele.thumbnail);
                dataString=dataString.replace('[@-title-@]',ele.title);
                dataString=dataString.replace('[@-brand-@]',ele.brand);
                dataString=dataString.replace('[@-category-@]',ele.category);
                dataString=dataString.replace('[@-price-@]',ele.price);
                dataString=dataString.replace('[@-rating-@]',4.69);
                dataString=dataString.replace('[@-id-@]',ele.id);
                res.write(dataString);
                dataString=dataString2;
            })
            res.end();
            break;
        }
        case '/products/product':{
            const id=parseInt(route.query.id)-1;
            if(id>dummyData.length||isNaN(id)){
                res.end('<h1 style="color:red;">Error 404<br>Not found</h1>');
                break;
            }
            let cnt=1;
            let arr=dummyData[id].images;
            arr.forEach(ele=>{
                itemString=itemString.replace(`[@-image${cnt++}-@]`,ele)
            })
            cnt=1;
            itemString=itemString.replace('[@-title-@]',dummyData[id].title);
            itemString=itemString.replace('[@-category-@]',dummyData[id].category);
            itemString=itemString.replace('[@-discount-@]',dummyData[id].discountPercentage);
            itemString=itemString.replace('[@-stock-@]',dummyData[id].stock);
            itemString=itemString.replace('[@-brand-@]',dummyData[id].brand);
            itemString=itemString.replace('[@-description-@]',dummyData[id].description);
            itemString=itemString.replace('[@-rating-@]',dummyData[id].rating);
            res.end(`<style>${fs.readFileSync('./style.css', 'utf-8')}</style>` + itemString)
            itemString=itemString2;
            break;
        }
        default:{
            res.end('<h1 style="color:red;">Error 404<br>Not found</h1>');
            break;
        }
    }
    console.log(route.query.id)
    });
  
server.listen(1440,()=>{
    console.log('Server started');
})

