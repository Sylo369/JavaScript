const readline = require('readline')
const chalk = require('chalk')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
let output = "";


function showMenu(){
process.stdout.write(chalk.green('[1] Green\n'))
process.stdout.write(chalk.red('[2] Red\n'))
process.stdout.write(chalk.blue('[3] Blue\n'))
process.stdout.write(chalk.white('[4] White\n'))
}
showMenu();

rl.on('line', (answer) => {
    switch(answer) {
        case '1':
        process.stdout.write(chalk.green('You selected 1 \n'))
        output += '1'
        break;
        
        case '2':
        process.stdout.write(chalk.red('You selected 2 \n'))
         output +='2'
        break;

        case '3':
        process.stdout.write(chalk.blue('You selected 3 \n'))
         output +='3'
        break;

        case '4':
        process.stdout.write(chalk.white('Exit \n'))
        process.stdout.write(output)
        rl.close()
        break;
    }

})