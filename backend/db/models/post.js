'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Post;
};