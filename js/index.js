const contenedorTarjetas = document.querySelector("#contenedorProductos");



function tarjetasProductosIndex(productos){
    productos.forEach(producto => {
        const nuevoCafe = document.createElement("div");
        nuevoCafe.classList = "tarjetaProducto";
        nuevoCafe.innerHTML = `
        <img src="./img/productos/${producto.id}.webp">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button>


        `
        contenedorTarjetas.appendChild(nuevoCafe);
        nuevoCafe.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto))

    });
}


tarjetasProductosIndex(cafes);