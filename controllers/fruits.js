const Fruit = require('../models/Fruit')

const index = async (req, res) => {
    try{
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    }
    catch(err){
        res.status(404).send({error :err})
    }
  }

  const show = async (req, res) => {
    const name = req.params.name.toLowerCase()
  try {
    const fruit = await Fruit.show(name)
    res.status(200).send(fruit)
  }
  catch(err){
      res.status(404).send({error : err})   
  }
  }

  const create = async (req, res)=> {
    try{
        const newFruit = await Fruit.create(req.body)
        res.status(201).send(newFruit)
    }
    catch(err){
        res.status(409).send({error:err})
    }
  }
  const update = async (req, res)=>{
    const fruit = req.params.name.toLowerCase()

    try{
        const data = await Fruit.show(fruit)
        const result = await data.update(req.body)
        console.log("result" +result)
        res.status(200).send(result)
    }
    catch(err){
        res.status(401).send({error:err})
    }
  }
const destroy = async (req, res) => {
    const fruitDelete = req.params.name.toLowerCase()
    try{
        const data = await Fruit.show(fruitDelete)
        const result = await data.destroy()
        console.log("result" +result)
        res.status(204).send(result)
    }
    catch(err){
        console.log("try block")
        res.status(404).send({error:err})
    }
}

  module.exports = {index, show, create, update, destroy}