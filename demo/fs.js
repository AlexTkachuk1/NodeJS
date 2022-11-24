const fs =require("fs");
const path = require("path");
// fs.mkdir(path.join(__dirname, "test"),(error) =>{
//     if(error){
//         throw error;
//     }
//     console.log("Папка создана");
// })

const   filePath = path.join(__dirname, "test", "text.txt");
// fs.writeFile(filePath,'Hello NodeJS!', (error)=>{
//      if(error){
//          throw error;
//      }

//      console.log('Фвйл создан');
// });
// fs.appendFile(filePath,'\nHello Again', (error)=>{
//     if(error){
//         throw error;
//     }

//     console.log('Фвйл создан');
// });

fs.readFile(filePath,"utf-8" , (error,content)=>{
    if(error)
    {
        throw error;
    }
    console.log("Content",content)

    // const data = Buffer.from(content);
    // console.log("Content",data.toString());
})