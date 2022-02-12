const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data)
})

console.log(fs.readFileSync('file.txt').toString());

fs.writeFile('file.txt', "This is a data", ()=>{
    console.log("Written to the file")
})

console.log(fs.writeFileSync('file2.txt', "This is a data2"));

console.log("Finished reading file");