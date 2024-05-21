function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("cafes"));
    console.log(memoria);
    let contador = 0;
    if(!memoria ){
        const nuevoProducto = getNuevoProducto(producto);
        localStorage.setItem("cafes", JSON.stringify([nuevoProducto]));
        contador = 1;
    } else {
        const productoIndex = memoria.findIndex(cafe => cafe.id === producto.id);
        console.log(productoIndex)
          const nuevaMemoria = memoria;
        if(productoIndex === -1){
          
            nuevaMemoria.push( getNuevoProducto(producto))
            localStorage.setItem("cafes", JSON.stringify(nuevaMemoria));
            contador = 1;

        } else {
            nuevaMemoria[productoIndex].cantidad ++;
            contador = nuevaMemoria[productoIndex].cantidad;
        }
        localStorage.setItem("cafes", JSON.stringify(nuevaMemoria));
        return contador;
    } 
    actualizarNumCarrito();

}

function quitarDelCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("cafes"));
    const productoIndex = memoria.findIndex(cafe => cafe.id === producto.id);
    if(memoria[productoIndex].cantidad === 1){
        memoria.splice(productoIndex,1);
        localStorage.setItem("cafes", JSON.stringify(memoria));

    } else{
        memoria[productoIndex].cantidad--;
    }
    localStorage.setItem("cafes", JSON.stringify(memoria));

}

function getNuevoProducto(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;   
    return nuevoProducto;
}
const numeroCarritoHtml = document.querySelector("#numeroCarrito");
function actualizarNumCarrito(){
    const memoria = JSON.parse(localStorage.getItem("cafes"));
    const contar = memoria.reduce((acum, current) => acum+current.cantidad,0)
    numeroCarritoHtml.innerText = contar;
}

actualizarNumCarrito();