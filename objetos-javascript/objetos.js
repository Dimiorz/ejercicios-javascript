var Gato = new gato("bola de pelos");
function gato(nombre)
{
    this.nombre = nombre;
    this.maulla = function(){
        alert(this.nombre + ' : miauu')
    }
}

alert(`el gato se llama${Gato.nombre}`);
Gato.maulla();