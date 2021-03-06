const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.render('index.ejs'))

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))