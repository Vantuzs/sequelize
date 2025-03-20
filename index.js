const http = require('http');
const PORT = process.nextTick.PORT || 5000

const server = http.createServer();

server.listen(PORT,()=>{
    console.log(`App started on port ${PORT}`);
});
