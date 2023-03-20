const { User, Thought } = require('../models');
const userController = {
    getAllUsers(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate({
                path: 'thoughts',
            })
            .populate({
                path: 'friends',
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
      updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body,
            { new: true, runValidators: true }
        ).then(dbUserData => {
         if(!dbUserData) {
             res.status(404).json({ message: 'No user found with this id!' });
             return;
         }
            res.status(200).json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
      },

      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
                res.status(200).json(user);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
      }
    

}

module.exports = userController;