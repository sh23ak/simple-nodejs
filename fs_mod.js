var http=require("http")
var fs=require('fs')
const {runInNewContext}=require('vm')
http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        res.write(data)
         res.end()
    })
   
}).listen(8080,()=>console.log("server started..."))