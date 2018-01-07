const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const env = require('dotenv').config();

const productionEnv = Object.create(process.env);
productionEnv.NODE_ENV = 'production';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/thanks', (req, res) => {
  var userInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email_address: req.body.email,
    comment: req.body.comment
  }
  client.messages.create({
    body: userInfo.first_name + ' ' + userInfo.last_name + ' wants to connect about ' + userInfo.comment + '. Contact them at ' + userInfo.email_address + '.',
    to: '+16193009004',
    from: '+16195360905'
  });
  res.render('thanks', userInfo);
});

app.listen(app.get('port'), () => {
  console.log('server is listening on http://localhost:' + app.get('port'));
})

// app.get('/', (req,res) => {
//   const data = {
//     person: {
//       firstName: 'Corey',
//       lastName: 'Cacananta',
//     }
//   }
//   res.render('index', data);
// })