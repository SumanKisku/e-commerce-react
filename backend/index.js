const express = require('express')
const app = express();
const cors = require('cors');
const port = 3001;
const clc = require("cli-color");
const notice = clc.blue;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/signup', (req, res) => {
  console.log(req.body);
  return res.json({
    name: 'suman'
  });
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(notice.blue.bold(`App is running on `), notice.blue.bold.underline(`http://localhost:${port}`));
})
