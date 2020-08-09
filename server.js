const express = require('express')
const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/builds',express.static(__dirname + '/builds'));

app.listen(3999, () => console.log('Server running on port 3999!')) 