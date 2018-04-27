var path = require("path") // to connect to local directories

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/add", function(req, res){
        res.sendFile(path.join(__dirname, '../public/landing.html'));
    });

    app.get("/view_dest", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view_dest.html"));
    });
}