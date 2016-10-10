var express = require('express'),
    path = require('path'),
    app = require('express')();

app.get('/', function(req, res) {
    res.render('index',{
        status: 200
    });
});

app.get('/src/my-view1.html', function(req, res) {
    res.render('my-view',{
        no: 1,
        title: "View One",
        viewname: "my-view1"
    });
});

app.get('/src/my-view2.html', function(req, res) {
    res.render('my-view',{
        no: 2,
        title: "View Two",
        viewname: "my-view2"
    });
});

app.get('/src/my-view3.html', function(req, res) {
    res.render('my-view',{
        no: 3,
        title: "View Three",
        viewname: "my-view3"
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res) {

    if(res.status(404)) {
        res.render('index', {
            status: 404
        });
    }

});

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'public/templates'));
app.set("view options", { layout: false } );


app.listen(8888, function(err) {
    console.log('Server running');
});