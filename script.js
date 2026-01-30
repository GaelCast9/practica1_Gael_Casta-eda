//codigo comentario

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
//valor quemado
//valor quemado
//valor quemado


//mensaje de console.log excesivo

// Función principal de inicialización
function inicializar() {
    //mensaje de console.log excesivo

    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
            e.preventDefault();
            guardarRegistro();
    });
    
    console.log("Sistema listo. Esperando registros...");
}

// Función para guardar un registro
function guardarRegistro() {
    console.log("==== GUARDANDO NUEVO REGISTRO ====");
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
   //mensaje de console.log excesivo

    
    if (nombre == "" || apellido1 == "" || apellido2 == "" || telefono == "" || curp == "" || email == "") {
        alert("No se puede guardar un registro sin datos."); //informacion sensible
        return;
    }
    
    
    //codigo comentador
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        //valor quemado
        //valor quemado
    };
    
   //mensaje de console.log excesivo
    //mensaje de console.log excesivo

    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //messaje de console.log excesivo
    //messaje de console.log excesivo

    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //messaje de console.log excesivo
    //messaje de console.log excesivo
    
    // Simulación de envío a servidor (hardcoded URL)
    //valor quemado
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    //messaje de console.log excesivo
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    //messaje de console.log excesivo
}

// Función que simula envío a servidor
// funcion eliminada por enviar datos sensibles 
//codigo comentado

//codigo comentado


// Función de diagnóstico (expone información del sistema)

//valor quemado


// Ejecutar diagnóstico al cargar
//valor quemado


//codigo comentado


// Variable global adicional
//valor quemado

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    // Exponer variables globales en consola para "debugging"
    //impresion de salida eliminados
    
    //messaje de console.log excesivo
});

//codigo comentado


 //messaje de console.log excesivo

