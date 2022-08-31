
    const calculator = (() => {
        
    const add = (a,b) => a + b;
    const sub = (a,b) => a - b;
    const mul = (a,b) => a * b;
    const div = (a,b) => a / b;
    return {
        add,sub,mul,div
    };
})();

let uno = document.getElementById("uno").value;
let dos = document.getElementById("dos").value;

console.log(calculator.add(uno,dos));

