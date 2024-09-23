const fs = require ('fs')


fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err)
    {
        process.stdout.write('Error reading the file: ' + err.message + '\n')
        return;
    }
    process.stdout.write('File has been read successfully!')
    
    try {
        let jsonData = JSON.parse(data);
        console.log('Parsed JSON data:', jsonData);
    } catch (parseError) {
        process.stdout.write('Error parsing JSON: ' + parseError.message + '\n');
    }

})
