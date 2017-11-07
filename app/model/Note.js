'use strict';

module.exports = app => {
    const mongoose = app.mongoose;

    /** @namespace model.Note*/
    const NoteSchema = new mongoose.Schema(/** @class model.NoteModel*/ {
        hash: String,
        title: { type: String },
        content: { type: String },
        date: { type: Date, default: Date.now },
    });
  
    return mongoose.model('Note', NoteSchema);
};
