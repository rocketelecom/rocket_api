// Imports ==================================================

const express = require("express");
var ping = require("ping");
const Telegram = require("./telegram");



// Servidor / Express ========================

const app = express();

function pingar(){
    
    var hosts = ['192.168.1.30', 'google.com', 'yahoo.com'];
    hosts.forEach(function(host){
        ping.sys.probe(host, function(isAlive){
            if(!isAlive){
                Telegram.reportar_cliente_off(host + " esta desconectado !");
            }
        });
   });
}

// Iniciando servidor ========================

app.listen(5000, () => {
    console.log('Servidor Node em funcionamento !');   


    setInterval(()=>{
        var hosts = ['192.168.1.30', 'google.com', 'yahoo.com'];
        hosts.forEach(function(host){
            ping.sys.probe(host, function(isAlive){
                if(!isAlive){
                    Telegram.reportar_cliente_off(host + " esta desconectado !");
                }
            });
       });
   },5000);
  //}, 300000);  
    
});

