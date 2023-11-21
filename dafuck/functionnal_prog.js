
var animals = [
    { name: 'A', species: 'rabbit'},
    { name: 'B', species: 'dog'},
    { name: 'C', species: 'fish'},
    { name: 'D', species: 'dog'}
]

// var dogs = []

// for (var i = 0; i < animals.length; i++)
// {
//     if (animals[i].species == 'dog')
//         dogs.push(animals[i])
// }


//ici en-dessous, animal agit comme une variable => animal represente un element de larray a chaque iteration. JS cree automatiquement
//cette variable en tant que parametre de la fonction de rappel.
//la fonction de rappel est une fonction temporaire que vous définissez pour spécifier le comportement à exécuter
// sur chaque élément de l'array, et l'argument animal représente un élément individuel du tableau à chaque itération.
var dogs = animals.filter(function(animal) {
    return (animal.species === 'dog');
})
// .join('\n');

dogs.forEach(function(dog)
{
    console.log(dog.name + ' = ' + dog.species + '\n');
})



// dogs.forEach(function(dog, index, arr) {
//     var space = (index < arr.length - 1) ? ' ' : '';
//     console.log(dogs);
// })

////////////////====

// var isDog = function(animal) {
//     return animal.species === 'dogs'
// }


console.log(dogs);


// var dogs = animals.fileter(isDog)
// var otherAnimals = animals.reject(isDog)