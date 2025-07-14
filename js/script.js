function agregarTarea(){

    //Obtenemos el valor del campo de la tarea
    let nuevaTareaTexto = document.getElementById('nuevaTarea').value;

    //Validamos que el valor no sea vacío
    if (nuevaTareaTexto === ''){
        alert('Una tarea no puede estar vacía');
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = nuevaTareaTexto + ' ';

    //Crear botón 'eliminar'
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function(){ nuevaTarea.remove(); }

    //Agregar botón eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar el elemento/tarea a la lista
    document.getElementById('listaTareas').appendChild(nuevaTarea);

    //Liampiar el imput(cuadro de texto)
    document.getElementById('nuevaTarea').value = '';
}