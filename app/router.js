'use strict';
const _ = require('lodash');

module.exports = app => {
    app.get('/', 'home.index');
    scanController('/api/note', app.controller.note);

    // region private
    function scanController(path, controller) {
        _.keys(controller).map(key => {
            if (key.indexOf('_') !== 0) {
                const verPath = getVerPath(key);
                app[verPath.ver](`${path}/${verPath.path}`, controller[key]);
            }
            return '';
        });
    
        function getVerPath(key) {
            const words = _.words(key);
            let ver = words[0];
    
            switch (ver) {
                case 'create':
                case 'update':
                case 'post':
                    ver = 'post';
                    break;
    
                default:
                    ver = 'get';
            }
            return { ver, path: words.join('') };
        }
    }
    // endregion
};

