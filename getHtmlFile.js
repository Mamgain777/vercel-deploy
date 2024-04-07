const path = require('path');

function getFilePath(fileName){
    const filepath = path.join(__dirname, 'frontend', fileName);
    return filepath;
}

module.exports = getFilePath;

