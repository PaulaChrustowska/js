const workers = [
    {
      id: 10,
      name: "Batman",
      age: 21,
      department: "Director",
      sex: 'male',
      fav_fruit: "apple",
      hair_color: 'red',
    },
    {
      id: 13,
      name: "Jocker",
      age: 32,
      department: "Administration",
      sex: 'male',
      fav_fruit: "tomato",
      hair_color: 'blond',


    },
    {
      id: 41,
      name: "Women Cat",
      age: 27,
      department: "Manager",
      sex: 'female',
      fav_fruit: "banana",
      hair_color: 'grey',

    },
    {
      id: 99,
      name: "Spiderman",
      age: 41,
      department: "HR specialist",
      sex: 'male',
      fav_fruit: 'raspberry',
      hair_color: 'black',
    }]

    // const age = a => a.age != 19
    // const department = d => d.department === "Director"
    // const result = workers
    //                     .filter(age)
    //                     .filter(department)
    //                     .map(g => `Hi, my favourite fruits is: ${g.fav_fruit} and my age is: ${g.age}`)


    // const id = i => i.id > 9
    // const age = a => a.age != 19
    // const sex = s => s.sex = 'male' && 'female'
    // const result = workers
    //                         .filter(id)
    //                         .map( s => `Hi, my sex is: ${s.sex} and my age is: ${s.age}`)

    const id = i => i.id > 13
    const age = a => a.age = 41
    const sex = s => s.sex = 'male' && 'female'
    const result = workers 
                
                            .filter(age)
                            .map( s => `Hello, my age is: ${s.age} and my hair_color is: ${s.hair_color}`)
    console.log(result)
                     