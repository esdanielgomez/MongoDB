//--------------------------------------------------------------------------------------
//INSERCIONES

/*

//Insetar una coleccion 
db.Persona.insertOne({ '_id': 1, 'Nombre': 'Daniel'});

//--------------------------------------------------------------------------------------
//ELIMINACIONES

//Eliminar a las personas de chile
db.Persona.deleteMany({'Pais': 'Chile'});

//--------------------------------------------------------------------------------------
//CONSULTAS

//Proyeccion de nombre y apellido
db.Persona.find({'Pais':'Colombia'},{'Nombre':1,'Apellido':1})

//Pais y genero femenino
db.Persona.find({ $and: [ {'Pais':'Peru'}, {'Genero':'Female'}]} ,
                {'Nombre':1,'Genero':1,'_id':0})

//Pais, genero femenino y mayores a 25 a�os
db.Persona.find({ $and: [ {'Pais':'Peru'}, {'Genero':'Female'}, { 'Edad' : {$gte : 25} } ]   },
                {'Nombre':1,'Genero':1,'_id':0})

//Pais, tarjeta visa
db.Persona.find({ $and : [{'Pais': 'Indonesia'},{'Comercio.Tarjeta':'visa'}]},
                          {'Nombre':1, '_id':0, 'Pais': 1, 'Comercio.Moneda': 1})

//--------------------------------------------------------------------------------------
//ACTUALIZACIONES

//Incrementa la edad de las personas en +1

db.collection('Persona').updateMany(
    {},
    { $inc: { 'Edad': 1 }}
);

//Actualiza el suelo y añade el status de jubilado

db.collection('Persona').updateMany(
    {
        $and : [{'Pais':'Colombia'},{ 'Edad': {$gte : 60} }]
    },
    { 
        $inc: { 'Empresa.Sueldo': 444 },
        $set: {'Empresa.Status' : 'Jubilado'}
    }
);

*/