const express = require('express');
const httpProxy = require('express-http-proxy');
const config = require("./config/config");
const {device1,device2,device3} = require("./device/vs1"); 

//const data_brocker_service = httpProxy();
const app = new express();


app.use(express.json());

app.post("/chemsen/readings",(req,res)=>{
   let devices=[
      new device1(),
      new device2(),
      new device3()
   ]
   res.status(200);
   res.send(devices);
});

app.listen(config.port,()=>{
   console.log("API rodando");
})