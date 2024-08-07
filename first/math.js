console.log("hello! chinmay");
function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

// module.exports = ("Chinmay");
// module.exports = {
//     mul,div
// }
module.exports = {
    mulfn: mul,
    divfn: div,
}


// exports.mul = (a, b) =>{return a*b};
// exports.div = (a,b) => a/b; 