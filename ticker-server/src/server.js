const express = require('express') ;
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
var cors = require('cors');
app.use(cors());

// install express , body-parser , mongodb , cors 
//Here we are configuring express to use body-parser as middle-ware.
// test get: curl http://localhost:3000/tickers
// test post : curl -d '{"SSID":"DOCS-ss"}' -H "Content-Type: application/json" -X POST http://localhost:3000/tickers?param=we 
// to run :
// 1. startup mongodb : from folder /usr/local/etc> , run command  "mongod --config /usr/local/etc/mongod.conf"
// 2  start app : from folder : /Users/rayxiao/code/angular/tickerUI/ticker-server/src> run command "node server.js"

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000,function() {
    console.log('listening on 3000')
})

app.get('/tickers',function(req,res) {
    var MongoClient = require('mongodb').MongoClient
    const client = new MongoClient('mongodb://127.0.0.1:27017/', {useUnifiedTopology: true});

     client.connect().then((client)=>{
        var db = client.db('tickerdb')
        db.collection('tickers').find().toArray(function (err, result) {
            if (err) throw err ;
            console.log("load:"+result.length);
            res.send(JSON.stringify(result)) ;
            client.close();
        });
    })
 })


 app.post('/tickers',function(req,res) {
    const tickers = req.body ;
    console.log("save:"+tickers.length);
    var MongoClient = require('mongodb').MongoClient
    const client = new MongoClient('mongodb://127.0.0.1:27017/', {useUnifiedTopology: true});

    client.connect().then((client)=>{
        var db = client.db('tickerdb')
        db.collection('tickers').deleteMany({}).then( (resolve, reject) => {
            console.log("deleted:");
          });;
        db.collection('tickers').insertMany(tickers).then( (resolve, reject) => {
            console.log("inserted:");
          });
        res.send(tickers);
    });
    
    
})

app.put('/tickers',function(req,res) {
    const ticker = req.body ;
    console.log("save:"+JSON.stringify(ticker));
    var MongoClient = require('mongodb').MongoClient
    const client = new MongoClient('mongodb://127.0.0.1:27017/', {useUnifiedTopology: true});

    client.connect().then((client)=>{
        var db = client.db('tickerdb')
        db.collection('tickers')
        .findOneAndReplace({"symbol" : ticker.symbol}, ticker)
        .then( (resolve, reject) => {
            console.log("updated:");
          });;
        res.send(ticker);
    });
    
    
})
