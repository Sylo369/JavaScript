const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
let output = "";

function showMenu(){
process.stdout.write('[1] Choice 1 \n')
process.stdout.write('[2] Choice 2 \n')
process.stdout.write('[3] Choice 3 \n')
process.stdout.write('[4] Exit \n')
}
showMenu();

rl.on('line', (answer) => {
    switch(answer) {
        case '1':
        process.stderr.write('You selected 1 \n')
        output += '1'
        break;
        
        case '2':
        process.stderr.write('You selected 2 \n')
         output +='2'
        break;

        case '3':
        process.stderr.write('You selected 3 \n')
         output +='3'
        break;

        case '4':
        process.stderr.write('Exit \n')
        process.stdout.write(output)
        rl.close()
        break;
    }

})