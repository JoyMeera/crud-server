const fruits =  require('../fruits.json')

class Fruit{
    constructor(fruit){
        this.genus = fruit.genus
        this.name = fruit.name
        this.id = fruit.id
        this.family = fruit.family
        this.order = fruit.order
        this.nutritions = fruit.nutritions
    }
    static showAll(){
        return fruits.map(fruit => new Fruit(fruit))
    }
    static show(name)
    {
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name)
        if(fruit){
            return new Fruit(fruit)
        }
        else{
         throw "The fruit doesnt exist"
        }

    }
    static create(data){ //Why is create function static
        const newFruit = data
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === newFruit.name.toLowerCase())
        if(fruit){
            throw "The fruit already exists in json file"
        }
        else{
            newFruit['id'] = fruits.length + 1
            fruits.push(newFruit)
            return new Fruit(newFruit)
        }
    }
    update(data){
        const updatedFruit = fruits.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updatedFruit){
            updatedFruit.name = data.name
            updatedFruit.family = data.family
            return new Fruit(updatedFruit)
        }
        else{
            throw "Fruit does not exit in file"
        }
    }
    destroy(){
        const deleteFruit = fruits.find((fruit) => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deleteFruit){
            const index = fruits.indexOf(deleteFruit);
            const deletedValue = fruits.splice(index, 1);
            return(deletedValue)
        }
        else{
            throw "Fruit doesnot exist"
        }
    }
}

module.exports = Fruit