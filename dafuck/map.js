var animals = [
    { name: 'A', species: 'rabbit'},
    { name: 'B', species: 'dog'},
    { name: 'C', species: 'fish'},
    { name: 'D', species: 'dog'}
]

var names = animals.map(function(animal)
{
    return animal.name + ' is a ' + animal.species + '\n'
})

///// ======

var names = animals.map((animal) => animal.name)

/////// =====

var names = animals.map((x) => x.name)

console.log(names)