var mongoose = require('mongoose');


//genre schema
var trouserSchema = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  price:{
    type: String,
    required:true
  },
  description:{
    type: String,
    required:true
  },
  img:{
    type:String,
    required:true
  },
  create_date:{
    type:Date,
    default:Date.now
  }
});

var Trouser = module.exports = mongoose.model('Trouser',trouserSchema)

//get genre
module.exports.getTrouser = function(callback, limit){
  console.log("logged")
  Trouser.find(callback).limit(limit);
}
module.exports.getTrouserById = function(id,callback){
  Trouser.findById(id,callback);
}
module.exports.addTrouser = function(trouser, callback){
  Trouser.create(trouser,callback);
  console.log("trouser added");
}

module.exports.deleteTrouser = function(id,callback){
  var query = {_id: id};
  Trouser.remove(query,callback);
}

module.exports.updateTrouser = function(id,trouser,options,callback){
  var query = {_id: id};
  var newf = {
    description:trouser.description,
    img: trouser.img
  }
  Trouser.findOneAndUpdate(query,newf,options,callback);
}
