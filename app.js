const express = require('express');
const body_parser = require('body-parser');
const port = process.env.PORT || 8081;

const matkat = [];

let app = express();
app.use(body_parser.urlencoded({
    extended: true
}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*" ); // update to match the domain you will make the request from
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
        {"id": 0, "name": "Suomi", "value": 43},
        {"id": 1, "name": "Islanti", "value": 78},
        {"id": 2, "name": "Kiina", "value": 68},
        {"id": 3, "name": "Meksiko", "value": 56},
        {"id": 4, "name": "Norja", "value": 70},
        {"id": 5, "name": "Ranska", "value": 69},
        {"id": 6, "name": "Ruotsi", "value": 59},
        {"id": 7, "name": "Saksa", "value": 64},
        {"id": 8, "name": "Tanska", "value": 70},
        {"id": 9, "name": "Turkki", "value": 46},
        {"id": 10, "name": "Uzbekistan", "value": 29},
        {"id": 11, "name": "Venäjä", "value": 63},
        {"id": 12, "name": "Viro", "value": 56}
    ]
    res.write(JSON.stringify(luettelo));
    res.end();
});

app.use((req, res, next) => {
    res.status(404);
    res.send(`
        page not found
    `);
});

app.listen(port);


