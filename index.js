const express = require('express')
const app = express()
const port = 3000
const pool = require('./queries')
const category = require('./api/categoryRouter')
const film = require('./api/filmRouter')


pool.connect((err, res) => {
  console.log(err);
  console.log('connected');
});

app.get('/', (req, res) => {
  res.send('Hello World Natasya!')
})

app.use(film)
app.use(category)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})