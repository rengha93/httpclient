var mongoose = require('mongoose');


//genre schema
var bookSchema = mongoose.Schema({
  name:{
    type: String,
    required:true
  },
  author:{
    type: String,
    required:true
  }, 
  genre:{
    type: String
    required:true
  },
  create_date:{
    type:Date,
    default:Date.now
  }
});

var Book = module.exports = mongoose.model('Book',bookSchema)

//get genre
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}

//get books by ID
module.exports.getBookById = function(id,callback){
  Book.findById(id,callback);
}
//add add Books
module.exports.addBook = function(book, callback){
  Book.create(book,callback);
}
//update book
module.exports.updateBook = function(id,book, options ,callback){
  var query = {_id: id};
  var update = {
    name: book.name,
    author:book.author,
    genre:book.genre
  }
  Book.findOneAndUpdate(query,update,options,callback);
}
