const express = require('express');
const app = express();
const path = require('path')

// Sert tous les fichiers dans "site" (HTML, CSS, images, favicons, etc.)
app.use(express.static(path.join(__dirname, 'site')));

// si l'url' est http://localhost:3000/ renvoie à site/index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'site', 'index.html'));
});

// écoute sur le port 3000
app.listen(3000, '0.0.0.0', () => {
    console.log('Serveur local démarré sur http://localhost:3000/ \n(ip de Jules : ..., ip de Mathieu : 192.168.1.113)');
});