let productosEnCarrito = localStorage.getItem("productos__En__Carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
console.log(productosEnCarrito)

const contenedorCarritoVacio = document.querySelector("#carrito__Vacio");
const contenedorCarritoProductos = document.querySelector("#carrito__Productos");
const contenedorCarritoAcciones = document.querySelector("#carrito__Acciones");
const contenedorCarritoComprado = document.querySelector("#carrito__Comprado");
let botonesEliminar = document.querySelectorAll(".carrito__Producto__Eliminar");
const botonVaciar = document.querySelector("#carrito__Acciones__Vaciar");
const ContenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector("#carrito__Acciones__Comprar");


function cargarProductosCarrito(){
if (productosEnCarrito && productosEnCarrito.length > 0){

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    contenedorCarritoProductos.innerHTML = "";
    productosEnCarrito.forEach(producto => {
        
    
    const div = document.createElement("div");
    div.classList.add("carrito__Producto");
    div.innerHTML = `
                    <img class="carrito__Producto__Imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="carrito__Prducto__Titulo">
                        <small>Titulo</small>
                        <h3>${producto.titulo}</h3>
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
                    `;

                contenedorCarritoProductos.append(div);

})

}else {
    contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");

} 
    actualizarBotonesEliminar();
    actualizarTotal();

}
cargarProductosCarrito(); 



function actualizarBotonesEliminar (){
    
    botonesEliminar = document.querySelectorAll(".carrito__Producto__Eliminar");

    botonesEliminar.forEach(boton=> {
        boton.addEventListener("click", eliminarDelCarrito);

    });
    
}

function eliminarDelCarrito(e){

    Toastify({
        text: "Producto eliminado Exitosamente",
        duration: 1000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #011627, #86c8f1)",
          borderRadius: '2rem'
        },
        offset: {
            x: '2rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '2rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();
    
    
    const idboton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.ID === idboton);
    
    productosEnCarrito.splice(index, 1);

cargarProductosCarrito(); 

localStorage.setItem("productos__En__Carrito", JSON.stringify(productosEnCarrito));
}


botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito (){

    Swal.fire({
        title: 'Esta a punto de cancelar la compra',
        text: `Se eliminaran ${productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0)} productos!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI! Quiero vaciarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
    localStorage.setItem("productos__En__Carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito(); 
          Swal.fire(
            'Listo!',
            'Carrito vaciado exitosamente.',
            'success'
          )
        }
      })


    
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto)=> acc + (producto.precio * producto.cantidad), 0)
total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito)
function comprarCarrito (){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos__En__Carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}