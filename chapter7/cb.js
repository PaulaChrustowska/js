


const room = [
    {
        furniture: 'warderobe',
        colour: 'grey',
        status: 'full',
        shelf: [
             {
                type: 'adventureBooks',
                old: false,
                size: 3
             },
             { 
                type: 'comics',
                new: true,
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
                new: true,
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
                new: true,
                size: 6
            }
        ],  
    }
]


// const furnitureColour = room => room.colour === 'grey'
// const result = room.filter(furnitureColour)
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

const hasOneShelfs = thing => thing.shelf.length === 1 
 console.log(hasOneShelfs(room[1]))