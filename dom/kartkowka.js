
const Krzys = {
    age: 35
}

const Dominika = {
    age: 35
}


// ZADANIE 1

// const people = [Krzys.age, Dominika.age];
// const whatAge = people.filter(a => a === 35)
// console.log(whatAge)


//ZADANIE 2

//OPCJA 1 

//console.log(Krzys.age.toString(),Dominika.age.toString())

//OPCJA 2 

// const myMap = new Map()

// myMap.set(Krzys, '35');
// myMap.set(Dominika, '35')
// console.log(myMap)




//ZADANIE 3

// const myMap = new Map()
// let age = true
// myMap.set([Krzys,Dominika])

// console.log(myMap)


//  const age = 'true'

// console.log(Krzys.age.toString());
// console.log(Dominika.age.toString())

// // console.log(Boolean('true'))


//  const age = 35

// console.log(age === 35)

const isAge = person => person.age === 35
console.log(isAge(person[0]))

