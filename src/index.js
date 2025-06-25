const express = require('express');
const app = express();

//configura el server 

app.set('port' , process.env. PORT || 3000 ); 
app.set ('json spaces' , 2)

//nuestro priwee ws metodo Get ruta . raiz 

app.get('/' , (req , res) => {

    res.json(
        {
            'Title' : 'Hola mundo'
        }
    );
})

app.get('/hola' , (req , res) => {

    res.json(
        {
            'Title' : 'Hola cambios'
        }
    );
})


app.get('/mensaje' , (req , res) => {

    res.json(
        {
            'Title' : 'Este es mi nuevo servidor'
        }
    );
})

//inicar el servidor 

app.listen (app.get('port'), () => {
    console.log(Server listening on port ${app.get('port')});

}); 

// VARIABLES EN UN  API   SUMA DE 2 NUMEROS 
//PARA ENVIAR INFORMACIÓN AL SERVIDOR USAMOS EL METODO POST  

//ciclo de vida de un API 
app.use(express.json());
app.post('/sumar',(req, res) => {//http://localhost:3000/sumar
    const{num1, num2} = req.body; //se declara los datos de entrada 

//Validar que se hayan enviado los dos numeros que no este vacio 
    if (!num1 || !num2) {
        return res.status(400).send({error: "Faltan dos numeros para sumar"}); 
    }

//Sumar los numeros 
    const resultado = num1 + num2; 


//Enviar el resultado
res.send({resultado});     

}); 

//FIN 

//---------------------------------
app.use(express.json());
app.post('/edad',(req, res) => {//http://localhost:3000/edad
    const{nacimiento, aactual} = req.body; //se declara los datos de entrada 

//Validar que se hayan enviado los dos numeros que no este vacio 
    if (!nacimiento || !aactual) {
        return res.status(400).send({error: "Faltan dos numeros para sumar"}); 
    }

//Sumar los numeros 
    const edad = aactual - nacimiento; 


//Enviar el resultado
res.send({edad});     

}); 

//FIN 


//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log("ESTE ES MI SERVIDOR Y ESTA EN EL htt://localhost:3000");
console.log("mi primer servidor ");

});