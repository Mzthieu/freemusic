const fs = require('fs');

fs.readFile('infos.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    let texte_entier = [];
    let valeur = '';
    let ligne = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === '-') {
            ligne.push(valeur);
            valeur = ''
        } else if (data[i] === '+') {
            ligne.push(valeur);
            valeur = ''
            texte_entier.push(ligne);
            ligne = [];
        } else if (data[i] === '\n') {
        } else {
            valeur += data[i];
        }
    };
    console.log(texte_entier);
    for (let k = 0; k < texte_entier.length; k++) {
        for (let g = 0; g < texte_entier[k].length; g++) {
            console.log(texte_entier[k][g]);
        };
    };
});