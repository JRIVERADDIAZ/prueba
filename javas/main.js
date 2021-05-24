

import { extraer } from "./db_acces.js";
let contador = document.getElementById("container-card")
const incluir = document.getElementsByClassName("carrito")[0];
const total = document.getElementById("precioTotal");
const cantidadC = document.getElementById("contadorCarrito");
const cant = document.getElementById("cantidad");

let productos = extraer().then((val)=>{
  extraF(val);
})

let extraF = (prod) => {
  return new Promise ((resolve) =>{
    resolve((
     
   pintar(productos)
    ))
   })
}

let contar = 1;
let cantidadCarrito = 0;
let carrito = [];




//   pintar cards :
const pintar = (productos) => {
  console.log(productos)
  contador.innerHTML = "";
  productos["data"].forEach((Producto) => {
    contador.innerHTML += ` 
      
      <div class="card" >  
        <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMN
              FHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058" >
        </figure>
  
  <div class="contenido-card">
    <h2 id="art"> ${Producto.title}</h2>
    <p class="description"> <!-- descripcion -->gente en la compu</p>
      <h4 id="prec">Precio: $${Producto.precio}</h4>
       <h3 id="stck">Stock disponible:${Producto.stock}</h3>
        <button class="button" onclick="agregar(${Producto.id})"> agregar al carrito </button>
        
        </div>
      </div>`;
  });
};
if (productos["data"].length > 1) {
  pintar(productos);
}

// agregar al carrito =)

function agregar(id) {
  let productoElegido = productos.find((el) => el.id == id);

  if (productoElegido.stock) {
    if (!carrito.some((el) => el.id == id)) {
      carrito.push({
        precio: productoElegido.precio,
        id: productoElegido.id,
        title: productoElegido.title,
        stock: productoElegido.stock,
        cantidad: 1,
      });
      cantidadCarrito += 1;
    } else {
      carrito.find((el) => el.id == id).cantidad += 1;
      cantidadCarrito += 1;
    }
    activarCarrito();
    aum(id);
    dism(id);
  } else {
    var txt;
  if (productoElegido.stock === 0) {
    txt = "NO HAY STOCK DISPONIBLE";
    window.alert(txt);
  }
 } 
}

// quitar producto del carrito =(
function quitar(id) {
  let productoeliminado = carrito.find((el) => el.id == id);
  let indice = carrito.indexOf(productoeliminado);
  carrito.splice(indice, 1);
  activarCarrito();
}

let activarCarrito = () => {
  incluir.innerHTML = ``;
  carrito.forEach((compra) => {
    incluir.innerHTML += `
    <p> ${compra.title} </p>
    <p>  el stock disponible es  : ${compra.stock} $ ${compra.precio} </p> 
    <button class="aum" onclick="aum(${compra.id})" > + </button>
    <p> cantidad a comprars : ${compra.cantidad}</p>
    <button class="dism" onclick= "dism(${compra.id})" > - </button>
     <button class ="pagara" onclick="quitar(${compra.id})"> quitar del carrito </button>

`;
  });

  // contador carrito
  let cantidadCarrito = carrito.reduce((acc, el) => (acc += el.cantidad), 0);
  const cantidadC = document.getElementById("contadorCarrito");
  cantidadC.innerText = cantidadCarrito;
  // total
  let pagar = carrito.reduce((acc, el) => (acc += el.precio * el.cantidad), 0);
  total.innerHTML = `
   Precio total: $ ${pagar}  
  <button class ="pagara" onclick=pagar() > pagar </button>`;
};

const aum = (id) => {
  let aumen = carrito.find((el) => el.id == id);
  if (aumen.stock >= aumen.cantidad) {
    aumen.cantidad += 1;
  } else {
    alert("no hay stock");
  }
  activarCarrito();
};
const dism = (id) => {
  let restar = carrito.find((el) => el.id == id);
  if (restar.cantidad === 1) {
    carrito.splice(restar, 1);
  } else {
    restar.cantidad -= 1;
  }
  activarCarrito();
};
//  quitar de las cards el producto elegido -->
const pagar = () => {
  carrito.forEach((aquitar) => {
    let producto = productos.find((el) => el.id === aquitar.id);
    producto.stock -= aquitar.cantidad;
  });
  pintar(productos);

  carrito = [];
  total.innerHTML = `Precio total:0`;
  activarCarrito();
};

