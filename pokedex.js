function Pokemon (nombrePokemon,nickname,tipo,debilidad){
    this.nombrePokemon = nombrePokemon;
    this.nickname = nickname;
    this.tipo = tipo;
    this.debilidad = debilidad;
}

function TipoFuego(nombrePokemon,nickname,tipo,debilidad,ataque1,ataque2,ataque3){
    Pokemon.call(this,nombrePokemon,nickname,tipo,debilidad,ataque1,ataque2,ataque3);
    this.debilidad = "agua"; 
    this.ataque1 = "Atack 1 Fuego";
    this.ataque2 = "Atack 2 Fuego";
    this.ataque3 = "Atack 3 Fuego";
}

function TipoAgua(nombrePokemon,nickname,tipo,debilidad,ataque1,ataque2,ataque3){
    Pokemon.call(this,nombrePokemon,nickname,tipo,debilidad,ataque1,ataque2,ataque3);
    this.debilidad = "electrico";
    this.ataque1 = "Atack 1 Agua";
    this.ataque2 = "Atack 2 Agua";
    this.ataque3 = "Atack 3 Agua";
} 

function TipoPlanta(nombrePokemon,nickname,tipo,debilidad,ataque1,ataque1,ataque2,ataque3){
    Pokemon.call(this,nombrePokemon,nickname,tipo,debilidad,ataque1,ataque2,ataque3);
    this.debilidad = "fuego";
    this.ataque1 = "Atack 1 Planta";
    this.ataque2 = "Atack 2 Planta";
    this.ataque3 = "Atack 3 Planta";
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoPlanta.prototype = Object.create(Pokemon.prototype);

TipoFuego.prototype.constructor = TipoFuego;
TipoAgua.prototype.constructor = TipoAgua;
TipoPlanta.prototype.constructor = TipoPlanta;

//console.log(TipoFuego.prototype);

const charizard = new TipoFuego("charizard","playar 1","fuego");

const pokemoDeAgua = new TipoAgua("Pokemon de agua","player 2","agua");

const pokeonDePlanta = new TipoPlanta("pokemon de planta","player 3","planta");

console.log(charizard);
console.log(pokemoDeAgua);
console.log(pokeonDePlanta);