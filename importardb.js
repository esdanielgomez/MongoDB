var fs = require('fs');
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


const url = "mongodb://cosmosnsoql:f5WX0ctn2UCvQAVToPrBI5BrlHXXmdTm9Ed5lE7tAXJKDCfVdGrAla4phmnqDtlbrN5BBJ8JGyckRmCwcDSgig==@cosmosnsoql.documents.azure.com:10255/?ssl=true";

let documentosPersonas = require('./datasetpersonas.json')
        
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    if(err) { 
        return console.log(" ---> Error al conectar a CosmosDB"); 
    }

    console.log("---> Conectado a Cosmos DB")
    var db = client.db('dbPersonas');

//Insertar varios documentos en la coleccion especificada:

db.collection('Persona').insertMany(documentosPersonas, function(err, collection){

    if(err){
        console.log(err)
    }
    else{
        console.log("Insertados correctamente!!")
        client.close;
    }

});



});


