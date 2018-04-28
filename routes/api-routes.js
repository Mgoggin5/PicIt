var db = require("../models")

module.exports = function(app){


  // app.get("/api/travelinfo", function(req, res) {
  //     db.travelinfo.findAll({}).then(function(dbtravelinfo) {
  //     res.json(dbtravelinfo);
  //   });
  // });

  // app.get("/api/travelinfo/:id", function(req, res){
  //     db.travelinfo.findOne({
  //         where: {id: req.params.id}
  //     }).then(function(dbtravelinfo){
  //         res.json(dbtravelinfo)
  //     });
  // });
 
// app.travelinfo("/api/travelinfo", function(req, res){
//     db.travelinfo.create(req.body).then(function(dbtravelinfo){
//         res.json(dbtravelinfo)
//     });
// })


  // app.delete("/api/travelinfo/:id", function(req, res) {
  //   db.travelinfo.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbtravelinfo) {
  //     res.json(dbtravelinfo);
  //   });
  // });

  // PUT route for updating travelinfos
  // app.put("/api/travelinfo", function(req, res) {
  //   db.travelinfo.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbtravelinfo) {
  //     res.json(dbtravelinfo);
  //   });
  // });

  // adding new travel info to the database.
  app.post("/api/new", function(req, res) {
    db.travelinfo.create(req.body).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
    // console.log("app.post req.body: ", req.body); // working
  });   

  // working   
  app.get("/api/entry", function(req, res) {
    db.travelinfo.findAll(req.body).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
  });
  //console.log (req.body) returns{}; no data.
  console.log("app.get api/entry: ",req.body);
});

  //  app.get("/api/entry", function(req, res) {
  //     db.travelinfo.findAll(req.body).then(function(err, result) {
  //       if (erro) throw err;
  //       res.json(dbtravelinfo);
  //   });
  //   //console.log (req.body) returns{}; no data.
  //   console.log("app.get api/entry: ", data);
  // });
  
    

}