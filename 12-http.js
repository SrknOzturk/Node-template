const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Welcome to our home page")
    }
    if(req.url === "/about"){
        res.end("Here is a short story ")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>WE CANT SEEM TO FİND THE PAGE</p>
        <a href="/">back home</a>`
    )

})

server.listen(5000);
