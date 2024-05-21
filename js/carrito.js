const contenedorTarjetas = document.getElementById("contenedorProductos");



function tarjetasProductosIndex() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("cafes"));
    console.log(productos)
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoCafe = document.createElement("div");
            nuevoCafe.classList = "tarjetaProducto";
            nuevoCafe.innerHTML = `
        <img src="./img/productos/${producto.id}.webp">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <div>
        <button>-</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button>+</button>
        </div>


        `
            contenedorTarjetas.appendChild(nuevoCafe);
            nuevoCafe.getElementsByTagName("button")[1].addEventListener("click", (e) => {
                const contadorElement = e.target.parentElement.getElementsByTagName("span")[0];
                contadorElement.innerText = agregarAlCarrito(producto);
            });
            nuevoCafe.getElementsByTagName("button")[0].addEventListener("click", (e) => {
                quitarDelCarrito(producto);
                tarjetasProductosIndex();
                    
            })

        });
    }
}


tarjetasProductosIndex();