var express = require('../config/express')();
var request = require('supertest')(express);


describe('#ProdutosController', function() {

    beforeEach(function(done) {
        var conn = express.infra.connectionFactory();
        conn.query("delete from produtos", function(err, result) {
            if(!err) {
                done();
            }
        });
    });

    it('#Listagem de Produtos em JSON', function(done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type',/json/)
            .expect(200, done);
        });


    it('#Cadastro de novo produto com dados inválidos', function(done){
        request.post('/produtos')
            .send({titulo:"", descricao:"novo livro"})
            .expect(400, done);
    });

    it('#Cadastro de novo produto com dados válidos', function(done){
        request.post('/produtos')
            .send({titulo:"Produtos MOCHA Teste", descricao:"novo livro sobre mocha de testes",preco:100})
            .expect(302, done);
    });
});