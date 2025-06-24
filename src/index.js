const express = require ('express');
const app = express();


// configuracion icial del servidor  en el puerto

app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)



//Nuestro primer WS Get  // A ESTAS RUTAS SE CONOCEN COMO END
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})


// rutas  responde el servidor a esta  ruta
app.get('/mensaje/mensaje1', (req, res) => {    
    res.json(
        {
            "Title": "mensaje de prueba"
        }
    );
})

app.use(express.json());
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    // Validación de que ambos números estén presentes
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({
            error: "Faltan números por sumar"
        });
    }

    // Asegurarse de que sean números
    const numero1 = Number(num1);
    const numero2 = Number(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
        return res.status(400).send({
            error: "Los valores deben ser números válidos"
        });
    }

    const resultado = numero1 + numero2;
    res.send({ resultado });
});


app.use(express.json());

app.post('/edad', (req, res) => {
    const { nacimiento, actual } = req.body;

    // Validación de que ambos datos estén presentes
    if (nacimiento === undefined || actual === undefined) {
        return res.status(400).send({
            error: "Faltan datos: año de nacimiento o año actual"
        });
    }

    // Convertir a número
    const anioNacimiento = Number(nacimiento);
    const anioActual = Number(actual);

    // Validar que sean números válidos
    if (isNaN(anioNacimiento) || isNaN(anioActual)) {
        return res.status(400).send({
            error: "Los valores deben ser números válidos"
        });
    }

    // Validar que el año actual no sea menor que el de nacimiento
    if (anioActual < anioNacimiento) {
        return res.status(400).send({
            error: "El año actual no puede ser menor que el año de nacimiento"
        });
    }

    // Calcular edad
    const edad = anioActual - anioNacimiento;
    res.send({ edad });
});

// VARIABLES EN UN  API    



//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log("ESTE ES MI SERVIDOR Y ESTA EN EL htt://localhost:4000");
console.log("mi primer servidor ");



});



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mostrar menú
function mostrarMenu() {
  console.log('\n=== MENÚ ===');
  console.log('1. Sumar dos números');
  console.log('2. Calcular edad');
  console.log('3. Salir');
  rl.question('Elige una opción (1-3): ', manejarOpcion);
}

// Manejar opción seleccionada
function manejarOpcion(opcion) {
  switch (opcion) {
    case '1':
      sumarNumeros();
      break;
    case '2':
      calcularEdad();
      break;
    case '3':
      console.log('¡Hasta luego!');
      rl.close();
      break;
    default:
      console.log('Opción no válida. Intenta de nuevo.');
      mostrarMenu();
  }
}

// Opción 1: Sumar dos números
function sumarNumeros() {
  rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      if (isNaN(n1) || isNaN(n2)) {
        console.log('Error: Debes ingresar números válidos.');
      } else {
        console.log(`Resultado: ${n1} + ${n2} = ${n1 + n2}`);
      }
      mostrarMenu();
    });
  });
}

// Opción 2: Calcular edad
function calcularEdad() {
  rl.question('Ingresa tu año de nacimiento: ', (nacimiento) => {
    rl.question('Ingresa el año actual: ', (actual) => {
      const anioNacimiento = parseInt(nacimiento);
      const anioActual = parseInt(actual);

      if (isNaN(anioNacimiento) || isNaN(anioActual)) {
        console.log('Error: Debes ingresar años válidos.');
      } else if (anioActual < anioNacimiento) {
        console.log('Error: El año actual no puede ser menor que el de nacimiento.');
      } else {
        const edad = anioActual - anioNacimiento;
        console.log(`Tienes ${edad} años.`);
      }
      mostrarMenu();
    });
  });
}

// Iniciar programa
mostrarMenu();



 //Variables en una api   suma de 2 numeros 
 //Para buscar informacion al servidor usamos el metodo  post


