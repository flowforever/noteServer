'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1509937592948_4793';

    // add your config here
    config.middleware = [];

    // security related
    config.security = {
        csrf: {
            useSession: true,
            ignoreJSON: true,
            queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
            bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
        },
    };


    config.mongoose = {
        url: 'mongodb://localhost:27017/notes',
        options: {},
    };

    return config;
};
