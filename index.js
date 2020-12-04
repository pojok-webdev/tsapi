var express = require('express'),
app = express(),
path = require('path'),
con = require('./js/connections.js'),
query = require('./js/queries.js'),
bodyParser = require('body-parser'),
jwt = require('jsonwebtoken'),
secretOrKey = 'padinet',
config = require("./js/configs.js");
app.engine("html",require("ejs").renderFile);
    app.set('views',path.join(__dirname,'views'));
    app.use(express.static(__dirname+'views'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
    });
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'10mb',extended:true}));

app.get('/getinstallrequests/:status',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getInstallRequests(req.params),result=>{
      res.send(result)
  })
})
app.get('/getinstallimages/:install_site_id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getInstallImages(req.params),result=>{
      res.send(result)
  })
})
app.post('/saveinstallimage',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  console.log('REQ',req)
  console.log('RES',res)
  con.getdata(query.saveinstallimage(req.body),result=>{
      res.send(result)
  })
})
app.get('/removeinstallimage/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.removeinstallimage(req.params),result=>{
      res.send(result)
  })
})
app.get('/getinstallationbyclientid/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getInstallationByClientId(req.params),result=>{
    res.send(result)
  })
})
app.get('/getclientbyid/:id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getClientById(req.params),result=>{
    res.send(result)
  })
})
app.get('/getclientbyinstallsiteid/:install_site_id',(req,res)=>{
  res.header("Access-Control-Allow-Origin","*")
  con.getdata(query.getClientByInstallSiteId(req.params),result=>{
    res.send(result)
  })
})
app.listen(process.env.PORT||2021)
