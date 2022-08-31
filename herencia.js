const Person = (nombre) => {
    const showName = () => console.log(`myu name is ${nombre}`);
    const doSomething3 = () => console.log(`student thing3`);
    return(showName,doSomething3);
} 
const Student = (nombre) => {
    const prototype = Person(nombre);
    const doSomething = () => console.log(`student thing`);
    const doSomething2 = () => console.log(`student thing2`);
    return Object.assign({},prototype,{doSomething,doSomething2})
}
const student = Student('carlos');

console.log(student);
student.showName();
student.doSomething();
student.doSomething2();
student.doSomething3();