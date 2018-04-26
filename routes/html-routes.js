// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages


var path = require("path") // to connect to local directories

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/locale", function(req, res){
        res.sendFile(path.join(__dirname, '../public/locale.html'));
    });

    app.get("/post", function(req, res){
        res.sendFile(path.join(__dirname, "../public/post.html"));
    });
}