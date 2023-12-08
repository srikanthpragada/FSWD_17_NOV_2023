
function iseven(n) {
    return  n % 2 === 0
}

function isodd(n) {
    return  n % 2 !== 0
}

exports.iseven = iseven 
exports.isodd = isodd 
exports.n = 100


//console.log(iseven(11), isodd(11))
