var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/meanstack', { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('meanstack');

    

    client.close();

});