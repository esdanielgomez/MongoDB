var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = 'mongodb://admin:admin123456@ds048319.mlab.com:48319/dbpersonal';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('meanstack');

    

    client.close();

});