const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');


// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//Because of this constraint. You cannot delete posts with comments
//Because if not, then the comment will exist in the database without a post existing,
// so it will be data taking up space without a purpose
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };