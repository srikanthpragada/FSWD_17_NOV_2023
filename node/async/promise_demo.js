let p = new Promise(
    (s, f) => {
        // code 
        s();
    }
)

console.log(p)
p.then(() => console.log("Success"))
p.catch(() => console.log("Error"))

