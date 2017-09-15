module.exports = function(app) {
    app.get('/produtos', function(req, res) {
        
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);

        produtosBanco.lista(function(erros, resultados){
            res.render('produtos/lista',{lista:resultados});
        });

        connection.end();
        //res.render("produtos/lista");
    });

    app.get('produtos/remove', function() {
        var connection = app.infra.connectionFactory;
        var produtosBanco = app.infra.produtosBanco(connection);
        var produto = produtosBanco.carrega(id,callback);

        if(produto){
            produtosBanco.remove(produto,callback);
        }
    });
}