const libro = {
    Titulo :"Cien años de soledad",
    Autor:"Gabriel García Márquez",
    Paginas: 565,
    Estado :true,

    /*infoLibro : function(){
        return libro;
    }*/
    infoLibro : function(){
        return this.Titulo + "\n" + this.Autor + "\n" + this.Paginas + "\n" + this.Estado;
    }
    
}
if (libro.Estado == true) {
    libro.Estado = "leido";
}
else{
    libro.Estado = "no leido";
}

console.log(libro.infoLibro());