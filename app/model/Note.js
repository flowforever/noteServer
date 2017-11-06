'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const UserSchema = new mongoose.Schema({
        key: String,
        title: { type: String },
        content: { type: String },
        date: { type: Date, default: Date.now },
    });
  
    return mongoose.model('Note', UserSchema);
};
