// pure node js.....setup..no framework..i mean...


// requiring the module....

const http = require('http');



// creating server object...

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {

        // res.setHeader('content-type', 'TEXT/HTML');
        res.write('<html>');
        res.write('<head><title>my first node js application without any framework!</title></head>');
        res.write('<body><h2>Hello People from node js server! </h2></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/about') {

        // res.setHeader('content-type', 'TEXT/HTML');
        res.write('<html>');
        res.write('<head><title>my first node js application without any framework!</title></head>');
        res.write('<body><h2>Hello People, I am a Fulll Stack Developer! </h2></body>');
        res.write('</html>');
        return res.end();
    }

});


//server setup..

server.listen(4000, () => {
    console.log('server is running on port 4000');
})






