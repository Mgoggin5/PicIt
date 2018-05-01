
// html-routes.js - this file offers a set of routes for sending users to the various html pages
var path = require("path") // to connect to local directories

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/add", function(req, res){
        res.sendFile(path.join(__dirname, '../public/landing.html'));
    });

    app.get("/post", function(req, res){
        res.sendFile(path.join(__dirname, "../public/post.html"));
    });

    app.get("/view", function(req, res){
<<<<<<< HEAD
        console.log('view route hit!');
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
 
=======
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

>>>>>>> 7292d4178bcaf79a8147076e86a9b0db876efaf3
    app.get("/view2", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view2.html"));
    });
}