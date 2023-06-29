const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,

} = require('../../controllers/userController');

// /api/users gets all users & creates a new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId gets a user by a single ID and deletes the user
router.route('/:user').get(getSingleUser);

// // /api/users/:userId/friends/:friendId adds a friend to the user's friend list
// router.route('/:user/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
