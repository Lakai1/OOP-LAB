function sum(a,b) {
    return a+b;
}
function substract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}

function divison(a,b) {
    if (b ==0) {
        throw new Error("Деление на ноль");
    }
    return a/b;
}

let res=0;
try {
    let test = 1/0 ;
} catch (Error) {
    console.log(Number.isFinite(1 / 0));
}