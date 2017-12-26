const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
  res.render('index');
})

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