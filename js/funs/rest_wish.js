function wish(message, ...names) {
    for(let n of names)
      console.log(`${message} ${n}`)
}


wish('Hello', 'Andy', 'Bill', 'Larry')
wish('Hi', 'Cathy', 'Kevin')
