var path = require("path") // to connect to local directories

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

<<<<<<< HEAD
    app.get("/landing", function(req, res){
=======
    app.get("/add", function(req, res){
>>>>>>> be20633121d678f551cd86eaa8d4c7dd48b6d2ea
        res.sendFile(path.join(__dirname, '../public/landing.html'));
    });

    app.get("/view_dest", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view_dest.html"));
    });
}