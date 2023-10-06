const input = document.getElementById("tareaInput")
const lista = document.getElementById("listaTareas")
let array = []

input.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        let tarea = input.value
        let estado = "Sin terminar"
        let objeto = { "Tarea: ": tarea, "Estado: ": estado }
        const li = document.createElement('li')
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        const textoTarea = document.createTextNode(tarea)

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                objeto["Estado: "] = "Terminado"
            } else {
                objeto["Estado: "] = "Sin terminar"
            }
            array[index] = objeto
            console.log(array)
        })

        const index = array.push(objeto) - 1

        li.appendChild(checkbox)
        li.appendChild(textoTarea)
        lista.appendChild(li)

        input.value = ""
        console.log(array)
    }
})
