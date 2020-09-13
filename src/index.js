const express = require("express");
const cors = require('cors')
const routes = require("./routes");

const app = express();

app.use(cors({
  origin: [
      'http://www.grlogtrans.com.br',
      'http://localhost:3000'
  ]
}))
app.use(express.json())
app.use(routes)

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.listen(process.env.PORT || 3333);
