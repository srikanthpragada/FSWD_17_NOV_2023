
function operation(op, x, y) {
    console.log(op(x, y))
}

function add(x, y) {
    return x + y
}

operation(add, 10, 20)
