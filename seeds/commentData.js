const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "Strongly agree!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I'm going to have to disagree.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Strongly agree!",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "I'm going to have to disagree.",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "Strongly agree!",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
