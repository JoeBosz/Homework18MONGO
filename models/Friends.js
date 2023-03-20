const { Schema, model } = require('mongoose');

const friendShema = new Schema(
    {
        friendName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            max_length: 50,
        },
    },
     );

const Friend = model('Friend', friendShema);

module.exports = Friend;