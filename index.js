const inquirer = require('inquirer');
const fs = require('fs');

function init() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "What text would you like to display? Enter up to 3 characters:"
            },
            {
                type: "input",
                name: "textColor",
                message: "What color would you like the text to be? Enter a color keyword OR a hexadecimal number:"
            },
            {
                type: "list",
                name: "shape",
                message: "What shape would you like the logo to be?",
                choices: ["circle", "triangle", "square"]
            },
            {
                type: "input",
                name: "shapeColor",
                message: "What color would you like the shape to be? Enter a color keyword OR a hexadecimal number:"
            }
        ]).
            
        then((data) => {
            const filename = `logo.svg`;
            let svgGenerated = generatedSVG(data)

      
            fs.writeFile(filename, svgGenerated, (err) =>
              err ? console.log(err) : console.log('Success!'));
            })
};

function generatedSVG(data) {
    if(data.shape ==='circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <${data.shape} cx="150" cy="100" r="80" fill="${data.shapeColor}" />
       <text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
   </svg>`
   }else if(data.shape ==='triangle'){
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <polygon points="150, 18 244, 182 56, 182"  fill="${data.shapeColor}" />
       <text x="154" y="160" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
   </svg>`
   }else if (data.shape ==='square'){
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect x="0" y="0" width="200" height="200" fill="${data.shapeColor}" />
       <text x="103" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
   </svg>`
    }
};



init()