const { Post } = require("../models");

const postData = [
  {
    title: "1st Post",
    content: "This is the content of the first blog post.",
    user_id: 1,
  },

  {
    title: "2nd Post",
    content: "This is the content of the second blog post.",
    user_id: 2,
  },
  {
    title: "3rd Post",
    content: "This is the content of the third blog post.",
    user_id: 3,
  },
  {
    title: "4th Post",
    content: "This is the content of the fourth blog post.",
    user_id: 4,
  },
  {
    title: "5th Post",
    content: "This is the content of the fifth blog post.",
    user_id: 5,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
