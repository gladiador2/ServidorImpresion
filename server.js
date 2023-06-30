const express = require('express');
const cors = require('cors');
const printer = require('pdf-to-printer');

const app = express();

// Habilitar CORS para cualquier origen
app.use(cors());

app.get('/imprimir-pdf', (req, res) => {
  const url = req.query.url;

  printer
    .print(url)
    .then(() => {
      console.log('PDF impreso correctamente');
      res.send('PDF impreso correctamente');
    })
    .catch((error) => {
      console.error('Ocurrió un error al imprimir:', error);
      res.status(500).send('Error al imprimir el PDF');
    });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
