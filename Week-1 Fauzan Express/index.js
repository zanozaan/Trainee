const express = require('express')
const app = express()
const port = 3030

// Soal Node.4
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const Name = [
  { id: 1, nama: 'Adit' },
  { id: 2, nama: 'Bagus' },
];

function getNow(newCity, callback){
  setTimeout(function () {
    Name.push(newCity);
    callback();
  }, 2000);
}

function getClass() {
    setTimeout(function () {
      console.log(Name);
    }, 1000);
  }
  
  getNow({ id: 3, nama: 'Cahyo' }, getClass);
  
  const responseCallback = (req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        data: Name,
      },
    });
  };
  
  app.get("/", responseCallback);

  app.post("/", (req, res) => {
  Name.push(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: req.body,
    },
  });
});

app.get("/Profil", (req, res) => {
 res.send(202).json({
    status: "success",
    data: {
      data: req.body,
    },
  });
});

app.get("/Profil", responseCallback);

// Soal Node.5
// const kota = `Bandung`;
// const provinsi = `Jawa Barat`;
// var myPromise = new Promise (function(resolve, reject){
 
//   const provinsix = 'Jawa Timur';

//   if(kota === kota && provinsi != provinsix){
//     resolve();
//   }else{
//     reject();
//   }
// });

// myPromise
//   .then(function (){
//   console.log(`Kota ${kota} berada di provinsi ${provinsi}`);
// }).catch(function (){
//   console.log(`Kota itu tidak berada di provinsi ${provinsi}`);
// });

// Soal Node.6
// function hello(){
//     console.log("Hello World!");
// }

// setInterval(hello, 2000);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  module.exports = app;