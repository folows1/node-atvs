const path = require("path");
const fs = require('fs');

// const directoryPath = 'C:\\Users\\michel.ribeiro\\Desktop';
// const directoryToWrite = 'C:\\Users\\michel.ribeiro\\Desktop\\output.txt';

const directoryPath = process.argv[2];
const directoryToWrite = process.argv[3];

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        if (file.endsWith('.txt')) {
            console.log(file);
            const absolutePath = path.resolve(directoryPath, file);
            const content = fs.readFileSync(absolutePath, 'utf8');
            const contentFile = `${file}\n${content}\n`;
            fs.appendFileSync(directoryToWrite, contentFile)
        }
    });
});