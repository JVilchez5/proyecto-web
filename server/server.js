const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

let tareas=[
    {
        id: 1,
        titulo: 'Apredner Node.js',
        completada: false
    },
    {
        id: 2,
        titulo: 'Apredner git',
        completada: true
    }
]

app.get('/api/tareas',(req, res) => {
    res.json(tareas);
});

app.post('/api/tareas', (req, res) => {
    const nuevaTarea ={
        id: tareas.length+1,
        titulo: req.body.titulo,
        completada: false
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

