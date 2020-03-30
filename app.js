const express = require('express');
const body_parser = require('body-parser');
const port = process.env.PORT || 8081;

const matkat = [];

let app = express();
app.use(body_parser.urlencoded({
    extended: true
}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Content-Type", "application/json");
    next();
  });


app.use((req, res, next) => {
    console.log(`path: ${req.path}`);
    next();
});

app.get('/', (req, res, next) => {
            res.write(`
        <html>
        <body>
            <h1>Matkalasku</h1>
        </html>
        </body>
        `);
        res.end();
});

app.get('/api', (req, res) => {
    var luettelo = [
        {"id": 0, "text": "Suomi", value: 24},
        {"id": 0, "text": "Ruotsi", value: 30}
    ]
    
    
    
    res.write(JSON.stringify(luettelo));
    res.end();
    //console.log(`korvaus`);
    //res.redirect('/');
});

app.use((req, res, next) => {
    res.status(404);
    res.send(`
        page not found
    `);
});

app.listen(port);




// http.createServer((request, response) => {
//   const { headers, method, url } = request;
//   let body = [];
//   request.on('error', (err) => {
//     console.error(err);
//   }).on('data', (chunk) => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     // BEGINNING OF NEW STUFF

//     response.on('error', (err) => {
//       console.error(err);
//     });

//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'application/json');
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.writeHead(200, {'Content-Type': 'application/json'})

//     //const responseBody = { headers, method, url, body };
//     const responseBody = [['Suomi',23],['Ruotsi',24],['Saksa',44]];
//     response.write(JSON.stringify(responseBody));
//     response.end();
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.end(JSON.stringify(responseBody))

//     // END OF NEW STUFF
//   });
// }).listen(port);