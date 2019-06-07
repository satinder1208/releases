const express = require('express')

const app = express()

//app.get('/', (req, res) => res.send('Hello World!'))

app.use('/builds',express.static(__dirname + '/builds'));

app.listen(3000, () => console.log('Server running on port 3000!')) 