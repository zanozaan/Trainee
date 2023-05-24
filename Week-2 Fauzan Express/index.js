const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3001

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Soal 4A
// app.get('/form', (req, res) => {
//   res.send(`
//     <form method="POST" action="/submit">
//       <input type="text" name="name" placeholder="Masukkan nama" /><br />
//       <input type="email" name="email" placeholder="Masukkan email" /><br />
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// Soal 4B
// app.post('/submit', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   res.send(`Terima kasih, ${name} (${email}), data Anda telah diterima.`);
// });

// Soal 7
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <h1>Hello Word!</h1>
      </head>
      <body>
        <img src="img/xxi.jpg" alt="Logo" width="200px"/>
      </body>
    </html>
  `);
});


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  module.exports = app;