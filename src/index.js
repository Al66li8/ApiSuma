const express = require('express');
const app = express();
const morgan= require('morgan');
const cors = require('cors');

// Configurar el servidor

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middleware para aceptar JSON
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Rutas GET
app.get('/', (req, res) => {
    res.json({ 'Title': 'Hola mundo' });
});

app.get('/hola', (req, res) => {
    res.json({ 'Title': 'Hola cambios' });
});

app.get('/mensaje', (req, res) => {
    res.json({ 'Title': 'Este es mi nuevo servidor' });
});

// Ruta POST para suma
app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: "Faltan dos números para sumar" });
    }

    const resultado = num1 + num2;
    res.send({ resultado });
});

// Ruta POST para edad
app.post('/edad', (req, res) => {
    const { nacimiento, aactual } = req.body;

    if (nacimiento === undefined || aactual === undefined) {
        return res.status(400).send({ error: "Faltan datos para calcular la edad" });
    }

    const edad = aactual - nacimiento;
    res.send({ edad });
});

// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en http://localhost:${app.get('port')}`);
});
