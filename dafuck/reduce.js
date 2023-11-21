var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var total = orders.reduce(function(sum, order) {
    // console.log("hello", sum, order)
    return sum + order.amount
}, 0)

///// en arrow fonctions ca donne :

var total = orders.reduce((sum, order) => sum + order.amount, 0)

console.log(total);