// Referencia: https://www.geeksforgeeks.org/node-js-fs-readfile-method/

// Script que lee un txt y devuelve un JSON  
const fs = require('fs');
  
// Leemos el archivo de prueba:
fs.readFile('2.txt', 'utf8', function(err, data){
    let dataArr = data.replaceAll("\r", "").replaceAll("---", "").split("\n")
    let objArr = []
    dataArr.forEach(item => {
        if(item.length > 0 && !item.trim().startsWith('Más...')){
            objArr.push(item.trim())
        }
    })
    // Creamos el JSON
    let json = {}
    // subastaId
    // 'SUBASTA SUB-JA-2023-209686 (25 lotes)' -> SUB-JA-2023-209686
    let subastaId = objArr[0].split(" ")[1]
    // 'JUZGADO MERCANTIL 3 - MADRID'
    let ubicacion = objArr[1]
    // 'Expediente: 0549/14',
    let expedienteId = objArr[2].split(" ")[1]
    // Estado: Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]
    let estado = objArr[3].split(' ').slice(1).join(' ');
    // descripción: bucle que agregue todos los strings desde 4 en adelante
    let descripcion = "";
    for(let i = 4; i<objArr.length; i++){
        descripcion += objArr[i]
    }
    // Añadimos todos los campos al json:
    json["subastaId"] = subastaId;
    json["ubicacion"] = ubicacion;
    json["expedienteId"] = expedienteId;
    json["estado"] = estado;
    json["descripcion"] = descripcion;

    console.log(JSON.stringify(json, null, 2)) // ok
});