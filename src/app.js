var express = require('express');
var cors = require('cors');
const url = require('url');
const querystring = require('querystring');
var app = express();
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
Genre = require('./Models/genre')
Book = require('./Models/book')
Shirt = require('./Models/shirt')
Trouser = require('./Models/trouser')
Shoe = require('./Models/shoe')
Men = require('./Models/men')

//Connect to mongoose
//mongoose.db = connect("localhost:27017/mydb");mongodb://localhost/bookstore
mongoose.connect('mongodb://localhost/bookstore',{ useNewUrlParser: true });
var db = mongoose.connection

//handling get Request
app.get('/',cors(),function(req,res){
  res.send("please use /api/books or /api/genres");
});
    //****************  SHIRT Section ****************************///
//post shirt
app.post('/api/shirt',function(req,res){
  var shirt = req.body;
  Shirt.addShirt(shirt,function(err,shirt){
    if(err){
      throw err;
    }else{
      res.json(shirt);
    }
  });
});

//get shirt
app.get('/api/shirt',cors(),function(req,res){
  Shirt.getShirt(function(err,shirt){
    if(err){
      throw err;
    }else{
      res.json(shirt);
    }
  });
});

//update shirt
app.put('/api/shirt/:_id',function(req,res){
  var id= req.params._id
  var shirt = req.body;
  Shirt.updateShirt(id,shirt,{},function(err,shirt){
    if(err){
      throw err;
    }else{
      res.json(shirt);
    }
  });
});
app.delete('/api/shirt/:_id',function(req,res){
  var id= req.params._id
  Shirt.deleteShirt(id,function(err,shirt){
    if(err){
      throw err;
    }else{
      res.json(shirt);
    }
  });
});
    //***************** GENRE section ***********************//
//add genre
app.post('/api/genres',function(req,res){
  var genre = req.body;
  Genre.addGenre(genre,function(err,genre){
    if(err){
      throw err;
    }else{
      res.json(genre);
    }
  });
});
//uppdate genre
app.put('/api/genres/:_id',function(req,res){
  var id= req.params._id
  var genre = req.body;
  Genre.updateGenre(id, genre,{},function(err,genre){
    if(err){
      throw err;
    }else{
      res.json(genre);
    }
  });
});

      //*******************  BOOK section  ****************///
//bookSchema
app.get('/api/books',function(req,res){
  Book.getBooks(function(err,books){
    if(err){
      throw err;
    }else{
      res.json(books);
    }
  });
});
//bookByID
app.get('/api/books/:_id',function(req,res){
  Book.getBookById(req.params._id,function(err,book){
    if(err){
      throw err;
    }else{
      res.json(book);
    }
  });
});
////add bookSchema
app.post('/api/books',function(req,res){
  var book = req.body;
  Book.addBook(book,function(err,book){
    if(err){
      throw err;
    }else{
      res.json(book);
    }
  });
});

//uppdate Book
app.put('/api/books/:_id',function(req,res){
  var id= req.params._id
  var book = req.body;
  Book.updateBook(id, book,{},function(err,book){
    if(err){
      throw err;
    }else{
      res.json(book);
    }
  });
});

//delete bookSchema
app.delete('/api/genres/:_id',function(req,res){
  var id= req.params._id
  Genre.deleteGenre(id,function(err,genre){
    if(err){
      throw err;
    }else{
      res.json(genre);
    }
  });
});


    //***************   Trouser section ******************//
    //get trouser
    app.get('/api/trouser',cors(),function(req,res){
      Trouser.getTrouser(function(err,trouser){
        if(err){
          throw err;
        }else{
          res.json(trouser);
        }
      });
    });
    //get trouser by id
    app.get('/api/trouser/:_id',cors(),function(req,res){
      var id= req.params._id
      Trouser.getTrouserById(id,function(err,trouser){
        if(err){
          throw err;
        }else{
          res.json(trouser);
        }
      });
    });

    //post trouser
    app.post('/api/trouser',function(req,res){
      var trouser = req.body;
      Trouser.addTrouser(trouser,function(err,trouser){
        if(err){
          throw err;
        }else{
          res.json(trouser);
        }
      });
    });

    //delete trouserSchema
    app.delete('/api/trouser/:_id',function(req,res){
      var id= req.params._id
      Trouser.deleteTrouser(id,function(err,trouser){
        if(err){
          throw err;
        }else{
          res.json(trouser);
        }
      });
    });

    //update trouser
    app.put('/api/trouser/:_id',function(req,res){
      var id= req.params._id
      var trouser = req.body;
      Book.updateBook(id, trouser,{},function(err,trouser){
        if(err){
          throw err;
        }else{
          res.json(trouser);
        }
      });
    });

    //*************************** SHOE Section   *****************************//

    //get trouser
    app.get('/api/shoe',cors(),function(req,res){
      Shoe.getShoe(function(err,shoe){
        if(err){
          throw err;
        }else{
          res.json(shoe);
        }
      });
    });
    //get trouser by id
    app.get('/api/shoe/:_id',cors(),function(req,res){
      var id= req.params._id
      Shoe.getShoeById(id,function(err,shoe){
        if(err){
          throw err;
        }else{
          res.json(shoe);
        }
      });
    });

    //post trouser
    app.post('/api/shoe',function(req,res){
      var shoe = req.body;
      Shoe.addShoe(shoe,function(err,shoe){
        if(err){
          throw err;
        }else{
          res.json(shoe);
        }
      });
    });

    //delete trouserSchema
    app.delete('/api/shoe/:_id',function(req,res){
      var id= req.params._id
      Shoe.deleteShoe(id,function(err,shoe){
        if(err){
          throw err;
        }else{
          res.json(shoe);
        }
      });
    });

    //update trouser
    app.put('/api/shoe/:_id',function(req,res){
      var id= req.params._id
      var shoe = req.body;
      Shoe.updateShoe(id, shoe,{},function(err,shoe){
        if(err){
          throw err;
        }else{
          res.json(shoe);
        }
      });
    });


//********************************Men's Product **************************************************//
    //get the men's product
      // app.get('/api/men',cors(),function(req,res){
      //   Men.getProduct(function(err,product){
      //     if(err){
      //       throw err;
      //     }else{
      //       res.json(product);
      //     }
      //   });
      // });

    //using query String

    app.get('/api/men',cors(),function(req,res){
        var qs = req.query;
        for (const k in qs) {
          console.log("Values in URL:::"+key, req.query[k])
          var key = k;
          var qs = req.query[k];
          }
      Men.fetchCategory(key,qs,function(err,product){
        if(err){
          throw err;
        }else{
          res.json(product);
        }
      });
    });
    //adding the products to the mongodb
    app.post('/api/men',function(req,res){
      var product = req.body;
      Men.addProduct(product,function(err,product){
        if(err){
          throw err;
        }else{
          res.json(product);
        }
      });
    });




//**************************App listenting to Port *********************************************
app.listen(3000);
console.log("started the app");
