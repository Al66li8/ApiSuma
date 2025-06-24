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




// VARIABLES EN UN  API    



//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log("ESTE ES MI SERVIDOR Y ESTA EN EL htt://localhost:4000");
console.log("mi primer servidor ");



});


