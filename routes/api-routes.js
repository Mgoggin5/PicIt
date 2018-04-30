var db = require("../models")

module.exports = function (app) {


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
