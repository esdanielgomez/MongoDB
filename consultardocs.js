var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

const url = "mongodb://cosmosnsoql:f5WX0ctn2UCvQAVToPrBI5BrlHXXmdTm9Ed5lE7tAXJKDCfVdGrAla4phmnqDtlbrN5BBJ8JGyckRmCwcDSgig==@cosmosnsoql.documents.azure.com:10255/?ssl=true";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('dbPersonas');

    /*//var cursor = db.collection('Persona').find({ $and : [{'Pais': 'Indonesia'},{'Comercio.Tarjeta':'visa'}]},{'Nombre':1, '_id':0, 'Pais': 1, 'Comercio.Moneda': 1});
    var cursor = db.collection('Persona').find({
        $and : [{'Pais':'Colombia'},{ 'Edad': {$gte : 50} }]
    })

    cursor.forEach(
        function(doc) { console.log('Nombre: ' + doc.Nombre + " - Edad: " + doc.Edad + " - Sueldo: " + doc.Empresa.Sueldo + ' - Estatus: ' + doc.Empresa.Status);},
        function(err) { 
            assert.equal(err, null); 
            return client.close(); 
        }
    );

    */

    var cursor = db.collection('Persona').find({ Edad: {$gte : 30} })
    
    cursor.forEach(
        function(doc) { 
            console.log(doc);
        },
        function(err) { 
            assert.equal(err, null); 
            return client.close(); 
        }
    );

    client.close();

});