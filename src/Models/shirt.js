var mongoose = require('mongoose');


//genre schema
var shirtSchema = mongoose.Schema({
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

var Shirt = module.exports = mongoose.model('Shirt',shirtSchema)

//get genre
module.exports.getShirt = function(callback, limit){
  console.log("logged")
  Shirt.find(callback).limit(limit);
}

module.exports.addShirt = function(shirt, callback){
  Shirt.create(shirt,callback);
  console.log("shirt added");
}

module.exports.deleteShirt = function(id,callback){
  var query = {_id: id};
  Shirt.remove(query,callback);
}

module.exports.updateShirt = function(id,shirt,options,callback){
  var query = {_id: id};
  var newf = {
    description:shirt.description,
    img: shirt.img
  }
  Shirt.findOneAndUpdate(query,newf,options,callback);
}
