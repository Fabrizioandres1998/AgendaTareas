const tareaInput = getElementById("tareaInput")
const listaTareas = getElementById("listaTareas")
const listaElemento = document.createElement("li")
const checkbox = document.createElement("input")
checkbox.type = "checkbox"

listaTareas.appenChild(listaElemento)
listaElemento.appendChild(checkbox)

//LO QUE QUIERO HACE ES QUE CUANDO ESCRIBA Y PRESIONE ENTER SE AGREGUE UN LI CHECKBOX A UL