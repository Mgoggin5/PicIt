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

    app.get("/view", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    app.get("/view2", function(req, res){
        res.sendFile(path.join(__dirname, "../public/view2.html"));
    });
}