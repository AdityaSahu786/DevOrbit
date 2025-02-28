const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, unique: true },
    password: String,
    name: String
});

const Todo = new Schema({
    title: String,
    done: Boolean,
    userId: { type: Schema.Types.ObjectId, ref: 'users' }  // Correctly using Schema.Types.ObjectId
});

// Models
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
};
