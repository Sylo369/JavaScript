const fs = require('node:fs');

fs.readFile('./textfile.txt', 'utf8', (err,data) => {
    if (err)
    {
        process.stderr.write('Error reading the file: ' + err.message + '\n')
        return;
    }
    process.stdout.write('File contents:' + data + '\n')
})