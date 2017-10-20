var express = require('express');
var bookRouter = express.Router();

var router = function(nav){

var books = [
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
    }
];

bookRouter.route('/')
    .get(function(req,res){
    //res.send("This is Book Express for Node 12345");
    res.render('books',{nav:nav,title:"Book's Page",book:books});
    });


bookRouter.route('/:id')
    .get(function(req,res){
    //res.send("This is Detail Page");
    res.render('books',{nav:nav,title:"Book Detail Page",book:books});
    });
    return bookRouter;
}
module.exports = router;