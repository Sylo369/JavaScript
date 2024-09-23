const https = require('https')

https.get('https:www.google.com', (response) =>{
let data = '';
response.on('data', (chunk) => {
data += chunk;
console.log(chunk)
});

response.on('end', () =>{
    process.stdout.write(data)
})
})
.on('error', (error) => {
    process.stdout.write(error);
})