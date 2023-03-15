const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,

} = require('../../controllers/thoughtController');
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getOneThought).put(updateThought);

module.exports = router;