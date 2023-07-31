/*let productosEnCarrito = JSON.parse(localStorage.getItem("productos__En__Carrito"));





const contenedorCarritoVacio = document.querySelector("#carrito__Vacio");
const contenedorCarritoProductos = document.querySelector("#carrito__Productos");
const contenedorCarritoAcciones = document.querySelector("#carrito__Acciones");
const ContenedorCarritoComprado = document.querySelector("#carrito__Comprado");


if (productosEnCarrito){

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    ContenedorCarritoComprado.classList.add("disabled");

    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("Carrito__Producto");
        div.innerHTML = `
        <div class="carrito__Producto">
                        <img class="carrito__Producto__Imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carrito__Prducto__Titulo">
                            <small>Titulo</small>
                            <h3>${producto.titulo} Abrigo 02</h3>
                        </div>
                        <div class="carrito__Producto__Cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad} </p>
                        </div>
                        <div class="carrito_Producto__Precio">
                            <small>Precio</small>
                            <p>$ ${producto.precio} </p>
                        </div>
                        <div class="carrito__Producto__Subtotal">
                            <small>Subtotal</small>
                            <p>$ ${producto.precio * producto.cantidad} </p>
                        </div>
                        <button class="carrito__Producto__Eliminar" id= ${producto.ID}><i class="bi bi-trash3"></i>
                        </button>
                    </div>        
        `;
        contenedorCarritoProductos.append(div)

    })
    

}else{

}


/* <div class="carrito__Producto">
                        <img class="carrito__Producto__Imagen" src="./Images/Camisetas/02.jpg" alt="">
                        <div class="carrito__Prducto__Titulo">
                            <small>Titulo</small>
                            <h3>Abrigo 02</h3>
                        </div>
                        <div class="carrito__Producto__Cantidad">
                            <small>Cantidad</small>
                            <p>2</p>
                        </div>
                        <div class="carrito_Producto__Precio">
                            <small>Precio</small>
                            <p>$1000</p>
                        </div>
                        <div class="carrito__Producto__Subtotal">
                            <small>Subtotal</small>
                            <p>$2000</p>
                        </div>
                        <button class="carrito__Producto__Eliminar"><i class="bi bi-trash3"></i>
                        </button>
                    </div> */