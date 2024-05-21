const contenedorTarjetas = document.getElementById("contenedorProductos");
const productoTotal = document.getElementById("unidades");
const productoPrecio = document.getElementById("precio")
const notiVacio = document.getElementById("notiVacio");
const totalesElement = document.getElementById("totales")
const reiniciarCarritoElement = document.getElementById("reseteo");
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
                actualizarTotal();
            });
            nuevoCafe.getElementsByTagName("button")[0].addEventListener("click", (e) => {
                quitarDelCarrito(producto);
                tarjetasProductosIndex();
                actualizarTotal();
                    
            })

        });
    }
}


tarjetasProductosIndex();
actualizarTotal();

function actualizarTotal(){
    const productos = JSON.parse(localStorage.getItem("cafes"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length>0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        productoTotal.innerText = unidades;
        productoPrecio.innerText = precio;
    }
notificacionVacio();
}

function notificacionVacio(){
    const productos = JSON.parse(localStorage.getItem("cafes"));
    notiVacio.classList.toggle("hidden", productos && productos.length>0)
    totalesElement.classList.toggle("hidden", !(productos && productos.length>0))
}

notificacionVacio();


reiniciarCarritoElement.addEventListener("click", reiniciarCarrito)
function reiniciarCarrito(){
    localStorage.removeItem("cafes");
    actualizarTotal();
    tarjetasProductosIndex();
}

