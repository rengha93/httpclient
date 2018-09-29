var mongoose = require('mongoose');


//genre schema
var menSchema = mongoose.Schema({
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
  category:{
    type:String,
    required:true
  },
  create_date:{
    type:Date,
    default:Date.now
  }
});

var Men = module.exports = mongoose.model('Men',menSchema)

//get genre
// module.exports.getProduct = function(callback, limit){
//   //var c = { category: { $eq:"shirt"}}
//   console.log("cccccc"+qs)
//   var c = { price: { $eq:"qs"}}
//   Men.find(c,callback).limit(limit);
// }

module.exports.addProduct = function(product, callback){
  Men.create(product,callback);
  console.log("Products added");
}

//fetch specific fetchCategory
module.exports.getProduct = function(key,qs,callback){
  console.log("key..."+key);
  console.log("value..."+qs);
  if(key == 'price'){
    var d = { price: { $eq:qs}}
    Men.find(d,callback);
  }
  else if (key == 'category') {
    var d = { category: { $eq:qs}}
    Men.find(d,callback);
  }
  else if (key == 'name') {
    var d = { name: { $eq:qs}}
    Men.find(d,callback);
  }
  else if (key == 'description') {
    var d = { description: { $eq:qs}}
    Men.find(d,callback);
  }
  else{
    Men.find(callback);
    console.log("fetched..........")
  }
}

// module.exports.deleteShirt = function(id,callback){
//   var query = {_id: id};
//   Shirt.remove(query,callback);
// }
//
// module.exports.updateShirt = function(id,shirt,options,callback){
//   var query = {_id: id};
//   var newf = {
//     description:shirt.description,
//     img: shirt.img
//   }
//   Shirt.findOneAndUpdate(query,newf,options,callback);
// }
