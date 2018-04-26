var db = require("../models")

module.exports = function(app){


<<<<<<< HEAD
  app.get("/api/posts", function(req, res) {
=======
  app.get("/api/travelinfo", function(req, res) {
>>>>>>> 7157ca393680d862e33a02eb1125fc616c675dcc
      db.travelinfo.findAll({}).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });

<<<<<<< HEAD
  app.get("/api/posts/:id", function(req, res){
=======
  app.get("/api/travelinfo/:id", function(req, res){
>>>>>>> 7157ca393680d862e33a02eb1125fc616c675dcc
      db.travelinfo.findOne({
          where: {id: req.params.id}
      }).then(function(dbtravelinfo){
          res.json(dbtravelinfo)
      });
  });
 
<<<<<<< HEAD
app.post("/api/posts", function(req, res){
=======
app.travelinfo("/api/travelinfo", function(req, res){
>>>>>>> 7157ca393680d862e33a02eb1125fc616c675dcc
    db.travelinfo.create(req.body).then(function(dbtravelinfo){
        res.json(dbtravelinfo)
    });
})


<<<<<<< HEAD
  app.delete("/api/posts/:id", function(req, res) {
=======
  app.delete("/api/travelinfo/:id", function(req, res) {
>>>>>>> 7157ca393680d862e33a02eb1125fc616c675dcc
    db.travelinfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });

<<<<<<< HEAD

  app.put("/api/posts", function(req, res) {
=======
  // PUT route for updating travelinfos
  app.put("/api/travelinfo", function(req, res) {
>>>>>>> 7157ca393680d862e33a02eb1125fc616c675dcc
    db.travelinfo.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });
}
