const fs = require("fs")


fs.readFile("files/name.txt", "utf-8", 
               (err, data) => {
                if(err)
                   console.log("Error " + err.message)
                else
                   console.log(data)
               })

console.log(new Date())
