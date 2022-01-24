const express = require('express');
const server = express();

server.all('/', (req, res)=>{
    res.send('picazoid')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("express server is now running.")});
}
module.exports = keepAlive;