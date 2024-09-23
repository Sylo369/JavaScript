const http = require('http')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
    let output = "";

rl.on('line', url => 
    {

        http.get(url, (response) =>{
            let data = ''
            response.on('data', (chunk) => {
            data += chunk;
            });
            
            response.on('end', () =>{
                process.stdout.write(data)
            })
            })
            .on('error', (error) => {
                process.stdout.write(error);
            })
    })

