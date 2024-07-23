// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/home', (req, res) => {
//   res.send({"hey": 23})
// })

// app.get('/dogs', (req, res) => {
//     res.send("Hello Dog")
//   })

// app.get('/dogs/:name', (req, res) => {
//     res.status(200).send(req.params.name) // data with staus code

//     //res.sendStatus(200) //only staus code

//     res.json()
//     res.end() //USed when deleting an item from db also when you dont want to send data or satuscode
// })
// // app.get('/dogs/:name', (req, res) => {
// //     res.send(req.query)
// // })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express')
const app = express()
const fruitRouter = require('./routes/fruitRouter')

app.get('/', (req,res)=>{
  res.send("Hello world")
})

//CORS
app.use(cors())
app.use(express.json())// the first parameter is ideally a path but since json has to applied for every route we removed the first parameter
app.use('/fruits', fruitRouter)

module.exports = app