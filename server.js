const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)

  if (req.url === '/base64/:text') return base64Call(req, res)
  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

function base64Call (req, res) {
  const base64 = Buffer.from(req.params.text).toString('base64');
  res.send(base64);
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
