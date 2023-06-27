const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users gets all users & creates new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId gets users by single ID and deletes user
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendsId adds and removes friends from friendlist
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);


module.exports = router;
