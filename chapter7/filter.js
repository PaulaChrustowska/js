// cw 1


// const carbsFruits_oneCup = [11, 13, 14, 15, 21, 22, 25]
// const fruit = f => f >= 13
// const result = carbsFruits_oneCup.filter(fruit)
// console.log(result)

//cw 2
//rozmiary mniejsze równe 37

const numberOfShoes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
// const shoes = s => s <= 37
// const result = numberOfShoes.filter(shoes)
// console.log(result)


//rozmiary  większe od 40

// const shoes = s => s > 40
// const result = numberOfShoes.filter(shoes)
// console.log(result)


//rozmiary posortowane w kolejnosci od największego do najmniejszego
// const result = numberOfShoes.sort(function(a,b){return b - a});
// console.log(result)






//cw 3

// const numbersOf_students = [12, 14, 52, 10, 87, 56, 45, 89, 11, 10, 56]
// // const result = numbersOf_students.sort()
// // console.log(result)

// const result = numbersOf_students.reverse()
// console.log(result)


//cw 4

const workers = [
    {
      id: 10,
      name: "Batman",
      age: 21,
      department: "Director",
      sex: 'male,'
    },
    {
      id: 13,
      name: "Jocker",
      age: 32,
      department: "Administration",
      sex: 'male',

    },
    {
      id: 41,
      name: "Women Cat",
      age: 27,
      department: "Manager",
      sex: 'female',
    },
    {
      id: 99,
      name: "Spiderman",
      age: 41,
      department: "HR specialist",
      sex: 'male',
    }
  ]
  

//   const id = i => i =10
//   const result = workers.filter(id)
//   console.log(result)


// const age = a => a.age >= 22
// const result = workers.filter(age)
// console.log(result)



// const sex = s => s.sex ==="male"
// const result = workers.filter(sex)
// console.log(result)



const sex = s => s.sex ==="female"
const result = workers.filter(sex)
console.log(result)




