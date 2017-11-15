'use strict';
const shortid = require('shortid');

module.exports = {
    async list(ctx) {
        const list = await ctx.model.Note.find({});
        ctx.body = {
            succes: true,
            total: list.length,
            list,
        };
    },

    async saveNote(ctx) {
        const reqBody = ctx.request.body;

        const note = await ctx.model.Note.findOne({ hash: reqBody.hash });

        if (note) {
            note.content = reqBody.content;
            await note.save();
        } else {
            await ctx.model.Note.create({
                hash: reqBody.hash || shortid.generate(),
                title: reqBody.title || `note ${new Date()}`,
                content: reqBody.content || `note content ${new Date()}`,
            });
        }

        ctx.body = {
            success: true,
        };
    },

    async detail(ctx) {
        const id = ctx.query.id;
        ctx.body = await ctx.model.Note.findById(id);
    },

    async getByHash(ctx) {
        const hash = ctx.query.hash;
        ctx.body = await ctx.model.Note.findOne({hash});
    },

    async update(ctx) {
        const reqBody = ctx.request.body;
        const note = await ctx.model.Note.findById(ctx.query.id);
        note.content = reqBody.content;
        note.title = reqBody.title;
        await note.save();
    },

    async updateHash(ctx) {
        const {id, hash} = ctx.query;
        const note = await ctx.model.Note.findById(id);
        note.hash = hash;
        await note.save();
    },
};
