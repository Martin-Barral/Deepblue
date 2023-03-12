//Declaro objetos(Productos) 
class Productos{
    constructor(nombre, precio, tipo, cantidadDetiros, edades, img){
       this.nombre = nombre,
       this.precio = precio,
       this.tipo = tipo,
       this.cantidadDetiros = cantidadDetiros,
       this.edades = edades,
       this.img = img
    }
   }
const canitaVoladora = new Productos("Canita voladora con silvido y tiro" , 2300 , "Volador", 1 , "Infantiles" , "canitaVoladora.jpeg")
const abejitasVoladora = new Productos("Abejitas voladoras" , 2000 , "Volador-Explosivo" , 1, "Infantiles" , "abejitas.jpeg")
const bugBug = new Productos("Bugbug" , 1200 , "explosivo" , 1 ,  "Infantiles", "Bug big 1200 4 unidades.jpeg")
const pickUP = new Productos("Pick up", 500 , "explosivo" , 1 , "Infantiles", "Pick Up 500 1unidad.jpeg")
const gruñion = new Productos("Gruñion" , 650 , "explosivo" , 1 , "Todas las edades", "Gruñon 650 6 unidades.jpeg")
//Catalogo con mi Array
let catalogo = []
if(localStorage.getItem("catalogo")){
    catalogo = JSON.parse (localStorage.getItem("catalogo"))
}else{
    console.log("Stock de productos")
    catalogo.push(bugBug, canitaVoladora, abejitasVoladora, pickUP, gruñion)
    //localStorage.setItem("producto",JSON.stringify(catalogo))
}
//Desestructurando mi array / objeto
let canitaVoladora1 ={
    ...canitaVoladora,
    unidades: "caja de 144 unidades",
    fabricante: "POW"
}
let abejitasVoladora1 ={
    ...abejitasVoladora,
    unidades:"10 cajas contienen 12 unidades",
    fabricante:"POW"
}
let bugBug1 ={
    ...bugBug,
    unidades:"4 unidades",
    fabricante: "POW"
}
let pickUP1 ={
    ...pickUP,
    unidades:"1 unidad",
    fabricante:"POW"
}
let gruñion1 ={
    ...gruñion,
    unidades:"1 unidad",
    fabricante:"POW"
}