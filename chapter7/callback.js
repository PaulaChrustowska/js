// const multiply = cyfra => cyfra * 3

// const arr = [3,5,8].map(multiply)

//     console.log(arr)



// const multiply = (x) => x * 2

// const arr = [3, 8, 19, 21, 3, 6]

// const result = arr.map(multiply)

// console.log(result)



// const add = (y) => y + 5

// const arr = [5,8,9,41,78,10]

// const result = arr.map(add)

// console.log(result)

const users = [
    {
        name: 'Krzys',
        age: 35,
        sex: 'male',
        interests: [
            {
                title: 'bushcraft',
                level: 'hard',
                experienceInYears: 2
            },
            {
                title: 'cycling',
                level: 'expert',
                experienceInYears: 20
            }
        ],
    },
    {
        name: 'Hubert',
        age: 5,
        sex: 'male',
        interests: [
            {
                title: 'lego',
                level: 'entry',
                experienceInYears: 2
            },
            {
                title: 'fauna',
                level: 'intermediate',
                experienceInYears: 2
            },
            {
                title: 'flora',
                level: 'entry',
                experienceInYears: 2
            }
        ],
    },
    {
        name: 'Emilka',
        age: 2,
        sex: 'female',
        interests: [
            {
                title: 'lego',
                level: 'entry',
                experienceInYears: 2
            }
        ],
    }
]


// const isMale = person => person.sex === 'male'  // true | false
// const isFemale = p => p.sex === 'female'
// // console.log(isMale(users[0]))
//  // console.log(isFemale(users[0]))

// const hasOneInterest = person => person.interests.length === 1
// console.log(hasOneInterest(users[2]))

// const result = users.filter(isMale).filter(hasOneInterest)

//  const hasLevelEntryInterest = person => person.interests[0].level === 'entry'
//  const descriptionOf = person => `hello my name is: ${person.name}`

//  const isEmilka = person => person.name === 'Emilka'

//  const result = users.filter(hasLevelEntryInterest).filter(isEmilka).map(descriptionOf) //uzytkownik, ktory ma jedno zainteresowanie i to jedno zainteresowanie musi byc na lewelu entry

// console.log(result)


// const nameOfInterests = person =>  person.interests[0] === 'lego'
// const isEmilka = person => person.name === 'Emilka'
// const result = users.filter(nameOfInterests).filter(isEmilka)
// console.log(result)



// const howLong = person =>  person.interests[0].experienceInYears = 20
// const isKrzys = person => person.name === 'Krzys'
// const result = users.filter(howLong).filter(isKrzys)
// console.log(result)



// const howLong = person =>  person.interests[0].experienceInYears = 2
// const isHubi = person => person.name === 'Hubert'
// const result = users.filter(howLong).filter(isHubi)
// console.log(result)


// const hasLevelHardInterest = person => person.interests[0].level === 'hard'
// const descriptionOf = person => `hello my name is: ${person.name}`
// const isKrzys = person => person.name === 'Krzys'
// const result = users.filter(hasLevelHardInterest).filter(isKrzys).map(descriptionOf)
// console.log(result)


// const age = a => a.age >= 3
// const hasLevelEntryInterest = person => person.interests[0].level === 'entry'
// const result = users.filter(age).filter(hasLevelEntryInterest)
// console.log(result)


// const age = a => a.age >= 6
// const descriptionOf = person => `hello my name is: ${person.name}`
// const hasLevelHardInterest = person => person.interests[0].level === 'hard'

// const result = users.filter(age).filter(hasLevelHardInterest).map(descriptionOf)
// console.log(result)
 





// const hasLevelHardInterest = person => person.interests[0].level === 'hard'
// const experienceInYears = person => person.interests[0].experienceInYears === 2
// const result = users.filter(hasLevelHardInterest).filter(experienceInYears)
// console.log(result)


//Thank You very much, my TEACHER :)

const hasLevelHardInterest = person => person.interests[0].level === 'hard'
const descriptionOf = person => "hello, I`m the best: ${person.name}"
const isKrzys = person => person.name === 'Krzys'
const experienceInYears = person => person.interests[0].experienceInYears === 2

const result = users.filter(hasLevelHardInterest)..filter(isKrzys).filter(experienceInYears).map(descriptionOf)
console.log(result)
