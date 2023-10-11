const fs = require('fs')
const http = require('http')
const path = require('path')
const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, 'public', req.url == '/' ? 'home.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch(ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
    if(err) {
        fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) =>{
            if(err) {
                res.writeHead(404)
                res.end("Not found!")
            } else {
                res.writeHead(200)
                res.end(data)
            }
        })
    } else {
        res.writeHead(200, {
            'Content-Type': contentType})
            res.end(content)
    }
    })
})

server.listen(3000, () => {
    console.log('started')
})
