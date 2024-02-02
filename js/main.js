
//Document write se consideraría una práctica muy poco recomendable
// document.write("<h1>menudo panorama</h1>")

//Primero obtenemos todos los elementos de la clase cuadrado en un htmlcollection
const cuadrados = document.getElementsByClassName("cuadrado")

//Transformamos esa htmlcollection en un array
const arrayCuadrados = Array.from(cuadrados);

//Recorremos el array, añadiendo el evento addEventListener a los elementos dentro del array
arrayCuadrados.map(
    (cuadrito, indice) => {
        cuadrito.addEventListener("click", (e) => {
            document.getElementById(e.target.id)
                .classList.add("seleccionado" + e.target.id.slice(-1))
        })
    }
)


