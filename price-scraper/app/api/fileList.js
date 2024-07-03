const fs = require ('fs')

const today = new Date().toISOString().split("T")[0];

const directoryPath = './app/api/'+today;
const fileList = []

fs.readdir(directoryPath, (err, files) =>{
    if (err) {
        console.error(err.message);
    } else {
        console.log('Files in directory: ');
        files.forEach(file => fileList.push(file))
        console.log(fileList)
    }
})