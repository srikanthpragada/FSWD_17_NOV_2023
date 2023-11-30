let p = { name: 'Larry', company: "Google" }

let { name, company, age = 30 } = p

console.log(name, company, age)

let { name: n, company: c } = p
console.log(n, c)




