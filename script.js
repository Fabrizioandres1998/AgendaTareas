const input = document.getElementById("tareaInput");
const lista = document.getElementById("listaTareas");
let array = [];
let estado = "Sin completar"

input.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        let tarea = input.value;
        const li = document.createElement('li');
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const textoTarea = document.createTextNode(tarea)
        array.push({ "Tarea: ": tarea, "Estado: ": estado });

        li.appendChild(checkbox);
        li.appendChild(textoTarea);
        lista.appendChild(li);
        
        input.value = "";
        console.log(array)

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                estado = "Completada"
            }
        })
    }

});



// checkbox.addEventListener("change", function() {
// });