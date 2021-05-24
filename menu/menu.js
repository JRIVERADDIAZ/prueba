// menu
const cont = document.getElementById("navigat");

`<div>
          <nav>
           <ul class="show">
            <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Index.HTML" class="la">Home</a></li>
              <li class="lp"><a href="/E-Comerce.HTML" class="la">E-Comerce</a></li>
               <li class="lp"><a href="file:///C:/Users/JOVAHIN/Desktop/PRUEBA%20CURSO%204/Social%20Media%20Marketing.HTML" class="la">Chekout</a></li>
                <img src="iconos/carrito.png" alt="" class="menu-bar"> </img> <span id="contadorCarrito"> 0 </span>   
                 </nav>
              
             </div>
            `;

$(".menu-bar").on("click", function () {
  $(".contenido").toggleClass("abrir");
});