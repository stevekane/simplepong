var http     = require("http")
var fs       = require("fs")
var path     = require("path")
var PORT     = 4000
var htmlPath = "./simplepong.html"

function writeError (res, err) {
  res.writeHead(404)
  res.end()
}

function sendFile (res, data) {
  res.write(data)
  res.end()
}

var server = http.createServer(function (req, res) {
  var filePath = "." + req.url
  var fileName = path.basename(filePath)
  var fileExt  = path.extname(fileName)

  fs.readFile(fileExt ? filePath : htmlPath, function (err, data) {
    if (err) return writeError(res, err)
    else     return sendFile(res, data)
  })
})

server.listen(PORT)
