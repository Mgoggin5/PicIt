// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var db = require("../models")

module.exports = function(app){


  app.get("/api/travelinfo", function(req, res) {
      db.travelinfo.findAll({}).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });

  app.get("/api/travelinfo/:id", function(req, res){
      db.travelinfo.findOne({
          where: {id: req.params.id}
      }).then(function(dbtravelinfo){
          res.json(dbtravelinfo)
      });
  });
 
// app.travelinfo("/api/travelinfo", function(req, res){
//     db.travelinfo.create(req.body).then(function(dbtravelinfo){
//         res.json(dbtravelinfo)
//     });
// })


  app.delete("/api/travelinfo/:id", function(req, res) {
    db.travelinfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });

  // PUT route for updating travelinfos
  app.put("/api/travelinfo", function(req, res) {
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



// Add sequelize code to create a destination.
app.post("/api/new", function(req, res) {
  db.travelinfos.create({
    //instead of req.bdy
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    pages: req.body.pages
  }).then(function(dbtravelinfos) {
    res.json(dbtravelinfos);
  });    
});
}