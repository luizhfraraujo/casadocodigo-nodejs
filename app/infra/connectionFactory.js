var mysql = require('mysql');

function createDBConnection(){

    if(process.env.NODE_ENV == 'development') {
        return mysql.createConnection({
            /*
            host : 'strawberry.arvixe.com',
            user : 'node_testes',
            password : 'nodetestes',
            database : 'node_testes_bd',
            */
            host : 'localhost',
            user : 'node_testes',
            password : 'nodetestes',
            database : 'casadocodigo_nodejs',
        
        });
    };


    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            /*
            host : 'strawberry.arvixe.com',
            user : 'node_testes',
            password : 'nodetestes',
            database : 'node_testes_bd',
            */
            host : 'localhost',
            user : 'node_testes',
            password : 'nodetestes',
            database : 'casadocodigo_nodejs_test',
        
        });
    };
    /*
    if(process.env.NODE_ENV == 'web') {
        return mysql.createConnection({
            
            host : 'strawberry.arvixe.com',
            user : 'node_testes',
            password : 'nodetestes',
            database : 'node_testes_bd',
            
        });
    };
    */
    
}

module.exports = function(){
    return createDBConnection;
}