const FactoryFuntioon = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log('----${capitalizeString()}----');
    return {printString};
}

const carrer = FactoryFuntioon('sistemas informaticos');

//printString();//error
//capitalizeString();//error
carrer.capitalizeString();//error
carrer.printString();//SISTEMAS INFORMATICOS