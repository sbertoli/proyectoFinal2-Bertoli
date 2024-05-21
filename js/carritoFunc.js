function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("cafes"));
    console.log(memoria);
    if(!memoria ){
        const nuevoProducto = getNuevoProducto(producto);
        localStorage.setItem("cafes", JSON.stringify([nuevoProducto]));
    } else {
        const productoIndex = memoria.findIndex(cafe => cafe.id === producto.id);
        console.log(productoIndex)
          const nuevaMemoria = memoria;
        if(productoIndex === -1){
          
            nuevaMemoria.push( getNuevoProducto(producto))
            localStorage.setItem("cafes", JSON.stringify(nuevaMemoria));

        } else {
            nuevaMemoria[productoIndex].cantidad ++;

        }
        localStorage.setItem("cafes", JSON.stringify(nuevaMemoria));

    } 
    actualizarNumCarrito();

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