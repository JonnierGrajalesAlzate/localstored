let nombre, apellido, usuario, email, direccion, departamento

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
    GuardarLocalStorage()
})

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    email = document.getElementById('email').value
    direccion = document.getElementById('address').value
    departamento = document.getElementById('state').value
    GuardarLocalStorage(nombre, apellido, usuario, email, direccion, departamento)
}


function GuardarLocalStorage(nombre, apellido, usuario, email, direccion, departamento) {
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('apellido', apellido)
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('email', email)
    localStorage.setItem('direccion', direccion)
    localStorage.setItem('departamento', departamento)
    ExtraerData()
}

function ExtraerData() {
    localStorage.getItem('nombre')
    alert('Bienvenido', nombre)
}

