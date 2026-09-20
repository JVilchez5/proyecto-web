const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/mensaje',(req, res) => {
    res.json({
        mensaje: 'hola desde el servidor Node.js'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

