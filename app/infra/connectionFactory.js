var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'node_testes',
        password : 'nodetestes',
        database : 'casadocodigo_nodejs',
          });

}

module.exports = function(){
    return createDBConnection;
}