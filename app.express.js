var express = require('express');
var app = express();
var port = 9015;


var author = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        read: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        read: false
    },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        author: 'Kenneth Grahame',
        read: false
    },
    {
        title: 'Life On The Mississippi',
        genre: 'History',
        author: 'Mark Twain',
        read: false
    },
    {
        title: 'Childhood',
        genre: 'Biography',
        author: 'Lev Nikolayevich Tolstoy',
        read: false
    }
];

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');


var navbar = [
    { name:'Home',link:'/'},
    { name:'Books',link:'/books'},
    { name:'Authors',link:'/authors'},
    { name:'About',link:'/about'},
]

var bookRouter = require('./src/routes/bookRoutes')(navbar);
app.use('/books',bookRouter);

app.get("/",function(req,res){
 //res.send("This is Root of 9005 express");
 res.render('index',{nav:navbar,title:"Home Page"});
});

app.route('/authors')
    .get(function(req,res){
    //res.send("This is Book Express for Node 12345");
    res.render('authors',{nav:navbar,title:"Author's Page",author:author});
});

app.listen(port,function(err){
    console.log("Server is running in 9015");
});
