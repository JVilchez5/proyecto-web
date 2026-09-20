const express = require('express');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/api/tareas', (req, res) => {
    const tareas = db.prepare('select * from tareas').all();
    res.json(tareas);
});

app.post('/api/tareas',(req, res)=>{
    const{titulo} = req.body;

    const resultado = db
    .prepare('insert into tareas (titulo) values (?)')
    .run(titulo);

    const nuevaTarea=db
    .prepare('select * from tareas where id = ?')
    .get (resultado.lastInsertRowid);

    res.status(201).json(nuevaTarea);
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

