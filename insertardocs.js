var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = "URL";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

        if(err) { 
            return console.log(" ---> Error al conectar a CosmosDB"); 
        }

        console.log("---> Conectado a Cosmos DB")
        var db = client.db('dbPersonas');
        
    var documentosPersonas = [
        { '_id':'01', 'Nombre':'Daniel', 'Apellido':'Gomez'} ,//0
        { '_id':'03', 'Nombre':'Andres', 'Apellido':'Jaramillo', 'Edad':32 }
    ];
      
    //Insertar un documento en la coleccion especificada:
        
    db.collection('Persona').insertOne(documentosPersonas[1], function(err, collection){
        if(err){
            console.log("Error al insertar: " + err.message);
        }
        else{
            console.log("Se ha insertado el registro.");
        }
    });

    //Insertar varios documentos en la coleccion especificada:

    db.collection('Persona').insertMany(documentosPersonas, function(err, collection){});
    
    client.close(); 

});

