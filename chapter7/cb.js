


const room = [
    {
        furniture: 'warderobe',
        colour: 'grey',
        status: 'full',
        shelf: [
             {
                type: 'adventureBooks',
                state: false,
                size: 3
             },
             { 
                type: 'comics',
                state: true,
                size: 5
            }
        ],
    },
    {
        furniture: 'rack',
        colour: 'white',
        status: 'almostEmpty',
        shelf: [
            {
                type: 'wollSewaters',
                state: true,
                size: 42
            }
        ],

    },
    {
        furniture: 'dresser',
        colour: 'brown',
        status: 'almostEmpty',
        shelf: [
            {
                type: 'porcelainMugs',
                state: true,
                size: 6
            }
        ],  
    }
]


// const furnitureColour = room => room.colour === 'grey'
// const result = room.filter(furnitureColour)const isNew = furniture => furniture[2].shelf = true 
// const result = furniture.filter(isNew)
// console.log(result)
// const furnitureColour = room => room.colour === 'brown'
// const result = room.filter(furnitureColour)
// console.log(result)


// const typeOfFurniture = room => room.furniture === 'rack'
// const descriptionOf = room => `Hello, my name is: ${room.furniture}` 
// const isRack = room => room.furniture === 'rack'
// const result = room.filter(typeOfFurniture).filter(isRack).map(descriptionOf)
// console.log(result)

// const statusEmpty = room => room.furniture.status === 'almostEmpty'
// const statusFull = room => room.furniture.status === 'full'
// // console.log(statusEmpty(room[0]))
// console.log(statusFull(room[0]))


// const hasTwoShelfs = thing => thing.shelf.length ===  2
// console.log(hasTwoShelfs(room[0]))

// const isNew = furniture => furniture[2].shelf = true 
// const result = furniture.filter(isNew)
// console.log(result)
// const hasOneShelfs = thing => thing.shelf.length === 1 
//  console.log(hasOneShelfs(room[1]))


// const whatSize = thing => thing.shelf[0].size === 6
// const isDresser = thing => thing.furniture === 'dresser'
// const result = room.filter(whatSize).filter(isDresser)
// console.log(result)


// const whatStatus = thing => thing.status === 'almostEmpty'
// const descriptionOf = thing => `hello, my name is: ${thing.furniture}`
// const isRack = thing => thing.furniture === 'rack'
// const result = room.filter(whatStatus).filter(isRack).map(descriptionOf)



// const isFull = thing => thing.status === 'full'
// const descriptionOf = thing => `hello, my name is: ${thing.furniture}`
// const isWarderobe = thing => thing.furniture === 'warderobe'
// const result = room.filter(isFull).filter(isWarderobe).map(descriptionOf)


// const isFull = thing => thing.status === 'full'
// const isWarderobe = thing => thing.furniture === 'warderobe'
// const result = room.filter(isFull).filter(isWarderobe)


// console.log(result)


// const whatS = thing => thing.shelf[0].size = 5
//  const descriptionOf = thing => `my name is: ${thing.furniture}`

// const isWarderobe = thing => thing.furniture === 'warderobe'
// const result = room.filter(whatS).filter(isWarderobe)
// console.log(result)



const typeIsAdventure = thing => thing.shelf[0].type === 'adventureBooks'
// const descriptionOf = thing => `my name is: ${thing.furniture}`
const isWarderobe = thing => thing.furniture === 'warderobe'

const result = room.filter(typeIsAdventure).filter(isWarderobe)
console.log(result)
