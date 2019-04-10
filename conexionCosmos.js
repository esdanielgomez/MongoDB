var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

//URL obtenido en el recurso CosmosDB en Azure
const url = "URL";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a CosmosDB"); 
    }
    
    console.log(" ---> Conectado a Cosmos DB.");
    var db = client.db('dbPersonas');

    db.

    client.close();


});