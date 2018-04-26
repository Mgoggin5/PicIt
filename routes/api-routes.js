var db = require("../models")

module.exports = function(app){


  app.get("/api/posts", function(req, res) {
      db.travelinfo.findAll({}).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });

  app.get("/api/posts/:id", function(req, res){
      db.travelinfo.findOne({
          where: {id: req.params.id}
      }).then(function(dbtravelinfo){
          res.json(dbtravelinfo)
      });
  });
 
app.post("/api/posts", function(req, res){
    db.travelinfo.create(req.body).then(function(dbtravelinfo){
        res.json(dbtravelinfo)
    });
})


  app.delete("/api/posts/:id", function(req, res) {
    db.travelinfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });


  app.put("/api/posts", function(req, res) {
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
