let listaUsuarios = [];

const objusuario = {
    id: '',
    nombre: '',
    rol: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');

const nombreImput = document.querySelector('#nombre');

const rolImput = document.querySelector('#rol');

const agregarImput = document.querySelector('#agregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if (nombreImput.value === '' || rolImput.value === '') {
        alert("Todos los campos son obligatorios");
        return
    }

    if(editando){
        //editandoRol();
        editando = false
    }else{
       objusuario.id = Date.now();
       objusuario.nombre = nombreImput.value;
       objusuario.rol = rolImput.value;

       agregarUsuario();
    }

}

function agregarUsuario(){
    listaUsuarios.push({...objusuario})

    mostrarUsuarios();
}

function mostrarUsuarios(){
    const divUsuarios = document.querySelector('.usuarios');

    listaUsuarios.forEach( usuario => {
        const {id, nombre, rol} = usuario;

        const parrafo = document.createElement('p');
        parrafo.textContent = ` ${id} - ${nombre} - ${rol} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('botton');
        //editarBoton.onclick = () => cargarUsuario(usuario);
        editarBoton.textContent = 'editar';
        editarBoton.classList,add('btn', 'btn-editar');
        parrafo.append('editarboton')

        const eliminarBoton = document.createElement('botton');
        //eliminarBoton.onclick = () => eliminarUsuario(id);
        eliminarBoton.textContent = 'eliminar';
        eliminarBoton.classList,add('btn', 'btn-eliminar');
        parrafo.append('eliminarBoton')

        const hr = document.createElement('hr');

        divUsuarios.appendChild(parrafo);
        divUsuarios.appendChild(hr);
    })
}