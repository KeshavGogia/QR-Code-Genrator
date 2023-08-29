import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
        name : 'URL',
        message : "Please enter the URL of site : "
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr.png'));
    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw (err);
        console.log("File created!");
    })
  })
