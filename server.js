const express = require('express')
const { resolve, join } = require('path')

const app = express()

app.use('/', express.static(resolve(__dirname, './build')))

app.get('/', function (req, res) {
  res.sendFile(join(__dirname, './build', 'index.html'));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) { return console.log(err) }

  console.log("server run web!!")
})
