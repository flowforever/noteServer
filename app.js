'use strict';
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

module.exports = () => {
    updateWeb();
};

async function updateWeb() {
    const webAppDir = path.resolve('../note-so-web');
    if(fs.existsSync(webAppDir)) {
        exec(`cd ${webAppDir} && git pull`);
    } else {
        //exec()
    }
}
