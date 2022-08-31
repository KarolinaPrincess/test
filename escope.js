let a = 80;

const mostrar = x => {
    
    a = x;
    return function(){
        ( function(){
            console.log(a);
        })();
    }
}

mostrar (99);

console.log(a);

