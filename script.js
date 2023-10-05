const input = document.getElementById("tareaInput");
const lista = document.getElementById("listaTareas");
let array = [];

input.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        let tarea = input.value;
        const li = document.createElement('li');
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const textoTarea = document.createTextNode(tarea);

        li.appendChild(checkbox);
        li.appendChild(textoTarea);
        lista.appendChild(li);

        checkbox.addEventListener("change", function() {
            let estado = checkbox.checked ? "Terminada" : "No terminada";
            array.push({ "Tarea: ": tarea, "Estado": estado });
            console.log(array);
        });

        input.value = "";
    }
});
console.log(array)