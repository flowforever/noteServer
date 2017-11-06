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
        const detail = await ctx.model.Note.findById(id);

        ctx.body = detail;
    },

};
