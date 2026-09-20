const listaTareas = document.getElementById('lista-tareas');
const formularioTarea= document.getElementById('formulario-tarea');
const tituloTarea = document.getElementById('titulo-tarea');

async function obtenerTareas() {
    try {
        const respuesta = await fetch('/api/tareas');
        const tareas = await respuesta.json();

        mostrarTareas(tareas);
    }catch(error){
        console.error('Error al obtener tareas:' , error);
    }
}

function mostrarTareas(tareas){
    listaTareas.innerHTML = '';

    tareas.forEach(tarea => {
        const elemento = document.createElement('li');
        elemento.textContent = tarea.titulo;

        if(tarea.completada){
            elemento.style.textDecoration= 'line-through';
        }
        listaTareas.appendChild(elemento);
    });
}

formularioTarea.addEventListener('submit', async (evento) =>{
    evento.preventDefault();

    const titulo = tituloTarea.value;

    try{
        const respuesta = await fetch('/api/tareas',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                titulo: titulo
            })
        });
        const nuevaTarea = await respuesta.json();
        console.log('tarea creada:',nuevaTarea);
        titulo.value ='';
        obtenerTareas();
    }catch(error){
        console.error('Error al crear la tarea:',error)
    }
});

obtenerTareas();