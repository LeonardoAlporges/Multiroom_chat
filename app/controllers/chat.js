module.exports.iniciaChat = function(application,req ,res){
    
    var dadosFroms = req.body;
    req.assert('apelido','Nome ou apelido é obrigatorio').notEmpty();
    req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);
    
    var error = req.validationErrors();
    
    if(error){
        res.render("index", {validacao : error });
        return;
    }

    application.get('io').emit(
        'msgParaCliente',
        {apelido: dadosFroms.apelido, mensagem :'Acabou de entrar no chat'}
        );

    console.log(dadosFroms);
    res.render("chat", {dadosFroms: dadosFroms});
};