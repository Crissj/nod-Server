require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.json('Hello World')
});
//GET
app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});
//POST
app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: "El nombre es necesario"
        })
    } else {

        res.json({
            persona: body
        })

    }
});
//PUt
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    })
});
//delete
app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})