const workers = [
    {
      id: 10,
      name: "Batman",
      age: 21,
      department: "Director",
      sex: 'male',
      fav_fruit: "apple",
    },
    {
      id: 13,
      name: "Jocker",
      age: 32,
      department: "Administration",
      sex: 'male',
      fav_fruit: "tomato",

    },
    {
      id: 41,
      name: "Women Cat",
      age: 27,
      department: "Manager",
      sex: 'female',
      fav_fruit: "banana",
    },
    {
      id: 99,
      name: "Spiderman",
      age: 41,
      department: "HR specialist",
      sex: 'male',
      fav_fruit: 'raspberry'
    }]

    const age = a => a.age >=  19
    const department = d => d.department === "Director"
    const result = workers
                        .filter(age)
                        .filter(department)
                        .map(g => `Hi, my favourite fruits is: ${g.fav_fruit} and my age is: ${g.age}`)

    console.log(result)
                     