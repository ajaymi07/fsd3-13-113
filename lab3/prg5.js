import http from 'http'

const server = http.createServer((req,res)=>{
    //req method -> GET,POST ,DELETE,PATCH
    console.log("Method:",req.method);
    console.log("URL:", req.url);
    
    
    
});