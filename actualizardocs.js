var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = "mongodb://cosmosnsoql:f5WX0ctn2UCvQAVToPrBI5BrlHXXmdTm9Ed5lE7tAXJKDCfVdGrAla4phmnqDtlbrN5BBJ8JGyckRmCwcDSgig==@cosmosnsoql.documents.azure.com:10255/?ssl=true";
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('dbPersonas');

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