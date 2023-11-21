const t = [1, -1, 3];

t.push(5)

console.log(t);
console.log("voici la taille du tab = ", t.length);
console.log("voici la case numero 2 = ", t[1]);


/////////////////////

console.log("\n");
console.log("Bonjour");

const t1 = [1, 2, 3];
const m1 = t1.map(value => value * 2)
console.log(m1);

const [one, two, ...rest] = t;
console.log(one);
console.log(two);
console.log(rest);

const object1 = {
    name: 'juana',
    lastname: 'parmigiana',
    age: 24,
    greet: function() {
        console.log('hello my name is ' + this.name)
    },
}
setTimeout(object1.greet.bind(object1), 1000);
const referenceMethodGreet = object1.greet;
referenceMethodGreet();

object1['tel number'] = '0680216253';
object1.pet = 'simba';

console.log(object1);
console.log("\n");

// const sum = (p1, p2) => {
//     return p1 + p2
// }

// const result = sum(1,5);
// console.log(result);
// console.log("\n");

// const square = p => p * p;
// const resSquare = square(3);
// console.log(resSquare);

// const tab = [3, 3, 3];
// const tabSquared = tab.map(p => p * p);
// console.log(tabSquared);
// const otherRes = tab.map(square);
// console.log(otherRes);

object1.greet();

object1.growOlder = function() {
    this.age += 1;
    console.log('you grew older you are ' + this.age);
}

object1.growOlder();

