class Stack {
    constructor() {
       this.data = []
    }
    push(value) {
       this.data.push(value)
    }
    pop() {
       return this.data.pop() 
    }
    length() {
      return this.data.length
    }
    clear() {
      this.data = []
    }
}

let s = new Stack()
s.push("Abc")
s.push("Xyz")
console.log(s.length())
console.log(s.pop())

s.clear() 
console.log(s.length())
