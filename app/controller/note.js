'use strict';

module.exports = {
    async list(ctx) {
        const list = await ctx.model.Note.find({});
        ctx.body = {
            succes: true,
            total: list.length,
            list,
        };
    },

    async create(ctx) {
        const note = await ctx.model.Note.create({
            hash: Date.now(),
            title: `new note title ${new Date()}`,
            content: `new note content ${new Date()}`,
        });
        ctx.body = {
            succes: true,
            note,
        };
    },

    async detail(ctx) {
        const id = ctx.query.id;
        ctx.body = await ctx.model.Note.findById(id);
    },

    async update(ctx) {
        const postBody = ctx.request.body;
        const note = await ctx.model.Note.findById(ctx.query.id);
        note.content = postBody.content;
        note.title = postBody.title;
        await note.save();
    },

    async updateHash(ctx) {
        const { id, hash } = ctx.query;
        const note = await ctx.model.Note.findById(id);
        note.hash = hash;
        await note.save();
    },
};
