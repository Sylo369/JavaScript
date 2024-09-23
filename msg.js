const inputs = process.argv

const message = inputs[2]
const loops = inputs[3]
const interval = inputs[4]
let counter = 0

const intervalId = setInterval(() =>{
process.stdout.write(message + '\n')
counter++
if(counter >= loops)
{
    clearInterval(intervalId)
}
}, interval)