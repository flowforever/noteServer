'use strict';
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;
const bluebird = require('bluebird');
const execAsync = bluebird.promisify(exec);


const webDir = 'note-so-web';

(async function updateWeb() {
    const outerDir = path.resolve('../');
    const webAppDir = path.join(outerDir, webDir);
    
    if (!fs.existsSync(webAppDir)) {
        await execAsync(`cd ${outerDir} && git clone https://github.com/flowforever/noteSoWeb.git ${webDir}`);
    }
    
    const cmd = `cd ${webAppDir} && git pull && npm install && npm run build`;
    console.log(cmd);
    const buildOutStr = await execAsync(cmd);
    console.log(buildOutStr);
})();
