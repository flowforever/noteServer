'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            this.ctx.body = 'hi, egg 1';
        }
    }
    return HomeController;
};
