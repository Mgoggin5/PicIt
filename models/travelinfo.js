module.exports = function(sequelize, DataTypes) {
    var Travelinfo = sequelize.define("travelinfo", {
        email: {
          type: DataTypes.STRING,
          // allowNull: false,
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
        restaurants: {
          type: DataTypes.TEXT,
        },
        }, {
          timestamps: false
        });  
  
    return Travelinfo;
  };
  
