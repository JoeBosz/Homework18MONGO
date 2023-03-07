const router = require('express').Router();
const {
getAllUsers,
getOneUser,
} = require('../../controllers/userController');
router.route('/').get(getAllUsers);
router.route('/:userId').get(getOneUser);

module.exports = router;