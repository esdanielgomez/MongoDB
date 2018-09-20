var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/dbPersonal', { useNewUrlParser: true }, function(err, client) {
    
    if(err) { 
        return console.log(" ---> Error al conectar a MongoDB"); 
    }
    
    console.log(" ---> Conectado a MongoDB.");
    var db = client.db('dbPersonal');

    //var cursor = db.collection('Persona').find({ $and : [{'Pais': 'Indonesia'},{'Comercio.Tarjeta':'visa'}]},{'Nombre':1, '_id':0, 'Pais': 1, 'Comercio.Moneda': 1});
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

    client.close();

});