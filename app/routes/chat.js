module.exports = function(appplication){
    appplication.post('/chat', function(req , res){
        appplication.app.controllers.chat.iniciaChat(appplication,req,res);
    })
    
    appplication.get('/chat', function(req , res){
        appplication.app.controllers.chat.iniciaChat(appplication,req,res);
    })    
}