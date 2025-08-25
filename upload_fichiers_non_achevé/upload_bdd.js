const fs = require('fs');
const Papa = require("papaparse");
const file = fs.readFileSync("infos_bdd.csv", "utf8");

const results = Papa.parse(file, {
    header: true,  // considère la première ligne comme descripteur
    delimiter: ",",
    dynamicTyping: true,  // convertit les String qui contiennent des chiffres en Number
    skipEmptyLines: true  // ne prend pas en compte les lignes vides (évite une erreur)
});
// results.data renvoie une liste de dictionnaires : [{nm: 4, nml: 1, art: 'Machin', tit: 'Truc', nom_fichier: 'Bidule.mp3'}, {...}]
// essayer en python d'extraire l'image associée au mp3