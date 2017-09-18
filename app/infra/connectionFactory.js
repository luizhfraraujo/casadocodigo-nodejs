var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host : 'strawberry.arvixe.com',
        user : 'node_testes',
        password : 'nodetestes',
        database : 'node_testes_bd',
        /*
        host : 'localhost',
        user : 'node_testes',
        password : 'nodetestes',
        database : 'casadocodigo_nodejs',
        */
    });

}

module.exports = function(){
    return createDBConnection;
}