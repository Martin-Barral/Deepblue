//CLASE 12 1.28HS como desestructurar un objeto dijo que era importante para mas adelante
// 1.35hs desestructurar array clase 12, 1.41 desestructura de array optima
//1.48 desestructurar un objeto mas darle info nueva PUEDE SERVIR
//1.55 como sumar en una funcion los precios 
//1.58 agregar a modal carrito
//CLASE 13 apartir de min 33 se ve libreria tostify
//min 52.50 capturas de DOM de carrito y demas
//1.23 luxon para guardar fecha en el momento de comprar y de recibir pedido puede servir
//1.34 hs mirar carrito completo, hasta 1.36 hs calcular total con reduce

//Capturas de DOM
let encontrar = document.getElementById("encontrar")
let buscador = document.getElementById("escribir")
let selectOrden = document.getElementById ("selectOrden")
let botonCarrito = document.getElementById("botonCarrito")
let modalBodyCarrito = document.getElementById("idModalCarrito")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
//Declaro mis Funciones
function mostrarCatalogo(array) {
    let cards1 = document.getElementById("cards")
    cards1.innerHTML = ""
    array.forEach((cards) => {
        const divProducto = document.createElement('div')
        divProducto.classList.add("col-12", "col-md-6", "col-lg-4")
        divProducto.innerHTML = `
        <div id="container-fluid" class="card" style="width: 18rem;">
        <img src="img/${cards.img}" class="card-img-top" alt="pirotecnia">
        <div class="card-body">
    <h5 class="card-title">${cards.nombre}</h5>
    <p class="card-text">${cards.nombre}: que vale $${cards.precio}.</p>
    <button id="sumar${cards.precio}"class="btn btn-primary">Agregar a carrito</button>
    <button id="quitar${cards.nombre}"class="btn btn-primary">Quitar de carrito</button>
    </div>
    </div>
    `
        cards1.appendChild(divProducto)
        let btnsumar = document.getElementById(`sumar${cards.precio}`)
        btnsumar.addEventListener("click", () => {
            alert(`El producto ${cards.nombre} vale $ ${cards.precio}`)
            carrito.push(cards)
            localStorage.setItem("carrito", JSON.stringify(catalogo))
            console.log(carrito)
        })
        
         let btnquitar = document.getElementById(`quitar${cards.nombre}`)
        btnquitar.addEventListener("click", () => {
            btnquitar.addEventListener("click", () => {
                let index = catalogo.indexOf(cards)
                if (index != -1) {
                    catalogo.splice(index, 1)
                    localStorage.setItem("catalogo", JSON.stringify(catalogo))
                    console.log(catalogo)
                    mostrarCatalogo()
                }
            })
        })
    })
}
mostrarCatalogo(catalogo)


function sumarProductos(array){
    modalBodyCarrito.innerHTML=""
    array.forEach((cards) =>{
        modalBodyCarrito.innerHTML +=`
        <div id="container-fluid" class="card" style="width: 18rem;">
        <img src="img/${cards.img}" class="card-img-top" alt="pirotecnia">
        <div class="card-body">
        <h5 class="card-title">${cards.nombre}</h5>
        <p class="card-text">${cards.nombre}: que vale $${cards.precio}.</p>
        <button id="quitar${cards.nombre}"class="btn btn-primary">Quitar de carrito</button>
    </div>
    </div>`
    })
}


function bucarInfo(buscado, array){
    let busquedaPrecio = array.filter(
        (catalogo)=>catalogo.nombre.toLowerCase().includes(buscado.toLowerCase()) || catalogo.edades .includes(buscado.toLowerCase())
        )
        busquedaPrecio.length == 0 ? 
        (encontrar.innerHTML = "<h2>No hay productos con ese nombre</h2>", 
   mostrarCatalogo(busquedaarray)) 
   : 
   (encontrar.innerHTML ="" , 
   mostrarCatalogo(busquedaarray))
}

function precioMenorMayor(array){
    const menorMayor =[].concat(array)
    //ordena de menor a mayor
    menorMayor.sort((a,b)=> a.precio - b.precio)
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
    mostrarCatalogo(menorMayor)
    console.log(menorMayor)
}

function ordenarProductosInfantiles(array){
    const ordenInfantil =[].concat(array)
    ordenInfantil.sort((a,b)=>{
        a.edades > b.edades , a.edades < b.edades , mostrarCatalogo(ordenInfantil) ,console.log(ordenInfantil)
    })}
    //Botones
   botonCarrito.addEventListener("click",()=>{
    sumarProductos(carrito)
   })

    buscador.addEventListener("input", ()=>{
        bucarInfo(buscador.value , catalogo)
    })
    
    selectOrden.addEventListener("change", ()=>{
        if(selectOrden.value == 1){
            precioMenorMayor(catalogo)
        }
        else if(selectOrden.value == 2){
            ordenarProductosInfantiles(catalogo)
        }
    })


    