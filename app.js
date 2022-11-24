const http = require("http");
const fs = require("fs");
const path = require("path");


const server = http.createServer((req, res)=>{
    
    if (req.url === '/'){
        fs.readFile(path.join("K:\TetstPugAndSCSS","src","index.html"), (error, data) =>{
            if(error){
                throw error;
            }

            res.writeHead(200, {
                "Content-Type" : "text/html"
            })

            res.end(data);
        })
    }
    
});

const port = process.env.port || 3000;
server.listen(3000, ()=>{
    console.log("Server has been started... ");
})