const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

function HashPassword(passwordToHash){
    const salt = bcrypt.genSaltSync(saltRounds);  // génère un 'sel', qui rend le hash encore plus complexe
    const hashedPassword = bcrypt.hashSync(passwordToHash, salt);
    return hashedPassword;
}

// Sert tous les fichiers dans "site" (HTML, CSS, images, favicons, etc.)
app.use(express.static(path.join(__dirname, 'site')));
app.use(express.json());  // Permet de lire du JSON

// si l'url' est http://localhost:3000/ renvoie à site/index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'site', 'index.html'));
});

app.post('/register', async (req, res) => {
    const { mdp_hash } = req.body;
    const hash = HashPassword(mdp_hash);
    res.send(hash);
});

// écoute sur le port 3000
app.listen(3000, '0.0.0.0', () => {
    console.log('Serveur local démarré sur http://localhost:3000/ \n(ip de Jules : ..., ip de Mathieu : 192.168.1.113)');
});