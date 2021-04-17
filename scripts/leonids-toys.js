const toy1 = {
    id: 1,
    name: "toy1",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}

const toy2 = {
    id: 2,
    name: "toy2",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4
}

const toys = [
    {
        id: 1,
        name: "toy1",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "toy2",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

// Define a new toy
const toy3 = {
    id: 3,
    name: "toy3",
    maker: "Google",
    operatingSystem: "Orange",
    price: 750,
    weight: 1.3
}

const toy4 = {
    id: 4,
    name: "toy4",
    maker: "Apple",
    operatingSystem: "Orange",
    price: 100,
    weight: 0.5
}

toys.push(toy3)
toys.push(toy4)




const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id

    const idForNewToy = maxId +1 

    toyObject.id = idForNewToy

    toys.push(toyObject)
}

const anewtoy = {
    name: "IDontKnow",
    maker: "Google",
    operatingSystem: "PineApple",
    price: 20,
    weight: 0.5   
}

addToyToInventory(anewtoy)

/* console.log(toys)*/

for(let i = 0; i < toys.length; i++) {
    console.log(toys[i].name);
  }

for (const toy of toys) {
    if (toy.id = 2){
    // Add 5% price 
    toy.price = toy.price*1.05

    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
    }
}

console.log(toys)