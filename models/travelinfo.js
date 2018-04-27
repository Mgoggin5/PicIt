module.exports = function(sequelize, DataTypes) {
    var travelinfo = sequelize.define("travelinfo", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [6] }
      },
      destination: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      attractions: {
        type: DataTypes.TEXT,
      },
      activities: {
        type: DataTypes.TEXT,
      },
      // destination: {
      //   type: DataTypes.TEXT,
      // }
    });  
  
    return travelinfo;
  }