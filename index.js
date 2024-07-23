// Initalisation of server
require('dotenv').config()
const app = require('./app')
const port = process.env.PORT || 5000 //the 5000 is a backup is incase port 3000 is busy

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })