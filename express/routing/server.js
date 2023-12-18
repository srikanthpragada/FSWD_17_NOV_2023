var adminRoutes = require("./admin")
var userRoutes = require("./user")

var express = require('express');
var path = require('path');
var app = express();
var port = 8888

app.use("/admin", adminRoutes)
app.use("/user", userRoutes)



app.get("/", (req, res) => {
  res.end("Routing Demo!")
}
)

app.listen(port, () => {
  console.log(`Express Application listening on port ${port}`)
})  
