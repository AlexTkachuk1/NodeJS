const path = require("path");
console.log("Название файла", path.basename(__filename));
console.log("Название файла", path.dirname(__filename));
console.log("Название файла", path.extname(__filename));
console.log("Название файла", path.parse(__filename));