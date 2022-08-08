const express = require('express')
const { resolve, join } = require('path')

const app = express()

app.use('/', express.static(resolve(__dirname, 'build')))

app.get('/', function (req, res) {
  console.log(res)
  res.sendFile(resolve(__dirname, 'build', 'index.html'));
});

app.get("/dashboard", function(req, res){
  res.render(join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT, (err) => {
  if (err) { return console.log(err) }

  console.log("server run web!!")
})
