var mysql = require('mysql');

module.exports = function() {
    return mysql.createConnection({
    host : 'localhost',
    user : 'node_testes',
    password : 'nodetestes',
    database : 'casadocodigo_nodejs',
    
});
}