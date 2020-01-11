module.exports = function(appplication){
    appplication.get('/', function(req , res){
       appplication.app.controllers.index.home(appplication,req,res);
    })
}