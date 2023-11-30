let p = {name : "Larry", company : 'Google'}
console.log(p)

let p2 = p
let p3 = { ... p, age : 35, company : "Facebook" }

p.name = "Sergy"

console.log(p2)
console.log(p3)

