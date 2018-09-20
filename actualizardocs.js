var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/dbPersonal', { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('dbPersonal');

    db.collection('Persona').updateMany(
        {
            $and : [{'Pais':'Colombia'},{ 'Edad': {$gte : 60} }]
        },
        { 
            $inc: { 'Empresa.Sueldo': 444 },
            $set: {'Empresa.Status' : 'Jubilado'}
        }
    );


    client.close();

});