var db = require("../models")

module.exports = function (app) {


<<<<<<< HEAD
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

  app.post("/api/new", function(req, res) {
    db.travelinfo.create(req.body).then(function(dbtravelinfo) {
      res.json(dbtravelinfo);
    });
    console.log("app.post req.body: ", req.body);
  });   
    

// Another way to do app.post to store data into database.
// app.post("/api/new", function(req, res) {
//   db.travelinfo.create({
//     email: req.body.emailadd,
//     destination: req.body.destInput,
//     attractions: req.body.attrInput,
//     activities: req.body.actiInput,
//     restaurants: req.body.restInput    
//   }).then(function(dbtravelinfo) {
//     res.json(dbtravelinfo);
//   });    
//   console.log("app.post req.body: ", req.body);
// });


}
=======
  app.get("/api/travelinfos", function (req, res) {
    db.travelinfo.findAll({}).then(function (dbtravelinfo) {
      res.json(dbtravelinfo);
    });
  });

  app.get("/api/travelinfos/:id", function (req, res) {
    db.travelinfo.findOne({
      where: { id: req.params.id }
    }).then(function (dbtravelinfo) {
      res.json(dbtravelinfo)
    });
  });

  app.travelinfo("/api/travelinfos", function (req, res) {
    db.travelinfo.create(req.body).then(function (dbtravelinf) {
      res.json(dbtravelinfo)
    });
  })


  app.delete("/api/travelinfos/:id", function (req, res) {
    db.travelinfo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbtravelinf) {
      res.json(dbtravelinfo);
    });
  });

  // PUT route for updating travelinfos
  app.put("/api/travelinfos", function (req, res) {
    db.travelinfo.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbtravelinfo) {
        res.json(dbtravelinfo);
      });
  });
}
>>>>>>> a34f40ccca4f8cea6a05d1c8941907e512bb558a
