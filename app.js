const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date');

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  let today = date.getDate('en-US');
  res.render('list', { listTitle: today, newItems: items });
});

app.post('/', (req, res) => {
  if (req.body.list === 'Work') {
    workItems.push(req.body.newFormItem);
    res.redirect('/work');
  } else {
    items.push(req.body.newFormItem);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newItems: workItems });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ... ` + port));
