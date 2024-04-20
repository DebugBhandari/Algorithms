const http = require('http');
const fs = require('fs');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the content type based on the file extension
  const filePath = req.url === '/' ? 'index.html' : req.url.slice(1);
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
  }[path.extname(filePath)] || 'text/plain';

  // Read the file and serve it as a response
  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found');
    } else {
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    }
  });
});

// Server listens on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});