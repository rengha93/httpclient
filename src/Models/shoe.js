var mongoose = require('mongoose');


//genre schema
var shoeSchema = mongoose.Schema({
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

var Shoe = module.exports = mongoose.model('Shoe',shoeSchema)

//get genre
module.exports.getShoe = function(callback, limit){
  console.log("logged")
  Shoe.find(callback).limit(limit);
}
module.exports.getShoeById = function(id,callback){
  Shoe.findById(id,callback);
}
module.exports.addShoe = function(shoe, callback){
  Shoe.create(shoe,callback);
  console.log("shoe added");
}

module.exports.deleteShoe = function(id,callback){
  var query = {_id: id};
  Shoe.remove(query,callback);
}

module.exports.updateShoe = function(id,shoe,options,callback){
  var query = {_id: id};
  var newf = {
    description:shoe.description,
    img: shoe.img
  }
  Shoe.findOneAndUpdate(query,newf,options,callback);
}
