module.exports = function(sequelize, DataTypes) {
    var travelinfo = sequelize.define("travelinfo", {
      email: {
        type: DataTypes.STRING,
      },
      destination: {
        type: DataTypes.TEXT,
      },
      attractions: {
        type: DataTypes.TEXT,
      },
      activities: {
        type: DataTypes.TEXT,
      },
      destination: {
        type: DataTypes.TEXT,
      }
    });  
  
    return travelinfo;
  };
  
