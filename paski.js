const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 9000
app.use(bodyParser.urlencoded({extented: false}))

app.get('/', (req, res) => res.send('I LOVE UUU'))



app.listen(port, () => console.log(`Example app listening on paski`))