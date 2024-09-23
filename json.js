const fs = require('fs')

    let circleArray = [];
    let rectangleArray = [];
    
    let circle1 = {radius: 10, fillColor: 'black', borderColor: 'yellow'}
    let circle2 = {radius: 11, fillColor: 'green', borderColor: 'blue'}
    let circle3 = {radius: 12, fillColor: 'red', borderColor: 'yellow'}
    let circle4 = {radius: 13, fillColor: 'purple', borderColor: 'pink'}
    let circle5 = {radius: 14, fillColor: 'cyan', borderColor: 'brown'}
    
    circleArray.push(circle1)
    circleArray.push(circle2)
    circleArray.push(circle3)
    circleArray.push(circle4)
    circleArray.push(circle5)
    
    
    let rectangle1 = {radius: 16, fillColor: 'black', borderColor: 'yellow'}
    let rectangle2 = {radius: 17, fillColor: 'green', borderColor: 'blue'}
    let rectangle3 = {radius: 18, fillColor: 'red', borderColor: 'yellow'}
    let rectangle4 = {radius: 19, fillColor: 'purple', borderColor: 'pink'}
    let rectangle5 = {radius: 20, fillColor: 'cyan', borderColor: 'brown'}
    
    rectangleArray.push(rectangle1)
    rectangleArray.push(rectangle2)
    rectangleArray.push(rectangle3)
    rectangleArray.push(rectangle4)
    rectangleArray.push(rectangle5)

const combinedData = {
    Circles: circleArray,
    Rectangles: rectangleArray
  };

  let dataJson = JSON.stringify(combinedData, null, 2)

fs.writeFile('data.json', dataJson, (err) => 
{
    if(err)
    {
        console.error('Error writing file:', err)
    }
    else
    {
        console.log('JSON file has been created')
    }
})