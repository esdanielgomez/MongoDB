var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/meanstack', { useNewUrlParser: true }, function(err, client) {

    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('meanstack');
    
    //Definicion de documentos:

    var documentosPersonas = [
        { '_id':'01', 'Nombre':'Daniel', 'Apellido':'Gomez', 'Correo':'daniel.gomez@ucuenca.edu.ec', 'Edad':23 },//0
        { '_id':'02', 'Nombre':'Carmen', 'Apellido':'Rios', 'Correo':'carmen.rios@gmail.com', 'Edad':43 },//1
        { '_id':'03', 'Nombre':'Andres', 'Apellido':'Jaramillo', 'Correo':'andres.jaramillo@microsoftstudent.com', 'Edad':32 },//2
        { '_id':'04', 'Nombre':'Maria', 'Apellido':'Torres', 'Correo':'maria.torres@hotmail.com', 'Edad':29 },//3
        { '_id':'05', 'Nombre':'Emma', 'Apellido':'Garcia', 'Correo':'emma.garcia@gmail.com', 'Edad':19}//4
    ];
      
    //Insertar un documento en la coleccion especificada:
        
    db.collection('Persona').insertOne(documentosPersonas[0], function(err, collection){
        if(err){
            console.log("Error al insertar: " + err.message);
        }
        else{
            console.log("Se ha insertado el registro.");
        }
    });

    //Insertar varios documentos en la coleccion especificada:

    db.collection('documentosCalificaciones').insertMany(documentosPersonas, function(err, collection){});
    
    client.close();  
});