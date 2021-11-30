


const room = [
    {
        furniture: 'warderobe',
        colour: 'grey',
        status: 'full',
        books: [
             {
                type: 'adventure',
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
        ssweaters: [
            {
                type: 'woll',
                new: true,
                size: 42
            }
        ],

    },
    {
        furniture: 'dresser',
        colour: 'brown',
        status: 'almostEmpty',
        mugs: [
            {
                type: 'porcelain',
                new: true,
                size: 6
            }
        ],  
    }
]


// const furnitureColour = room => room.colour === 'grey'
// const result = room.filter(furnitureColour)
// console.log(result)


const furnitureColour = room => room.colour === 'brown'
const result = room.filter(furnitureColour)
console.log(result)

        