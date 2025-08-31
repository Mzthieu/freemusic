const eye = document.getElementById('eye');
const eyeConfirm = document.getElementById('eye_confirm');
const valider = document.getElementById('valider');
const confirmMdp = document.getElementById('confirm');
const bcript = require('bcrypt'); // bibliothèque pour hasher le mot de passe (peut-être un problème ici)
const saltRounds = 10; // plus ce nombre est élevé, plus le hash sera sécurisé
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://subkyvlpofepcqbegyvq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1Ymt5dmxwb2ZlcGNxYmVneXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTUwMzcsImV4cCI6MjA3MTg3MTAzN30.HsbZgSXl64lQMxk89adxJNhlJUdDkbvLC6HiZQmHkHM';
const supabase = createClient(supabaseUrl, supabaseKey);
let exec = false;

eye.addEventListener('click', () => {
    if(eye.className === "fi-xnpuxl-eye-solid"){
        eye.className = "fi-xnsuxl-eye-solid";
        mdp.type = "text";
    } else {
        eye.className = "fi-xnpuxl-eye-solid";
        mdp.type = "password";
    }
    window.friconix_update();
});

eyeConfirm.addEventListener('click', () => {
    if(eyeConfirm.className === "fi-xnpuxl-eye-solid"){
        eyeConfirm.className = "fi-xnsuxl-eye-solid";
        confirmMdp.type = "text";
    } else {
        eyeConfirm.className = "fi-xnpuxl-eye-solid";
        confirmMdp.type = "password";
    }
    window.friconix_update();
});

valider.addEventListener('click', () => {
    alert('ervrgr');
    const id_connexion = document.getElementById('id_connexion');
    const userName = document.getElementById('nom');
    const email = document.getElementById('email');
    const mdp = document.getElementById('mdp');
    let msg_err = document.getElementById('msg_err')
    if(mdp.value != confirmMdp.value){
        msg_err.innerHTML = '⚠️ Les mots de passe entrés doivent être identiques !';
        msg_err.className = 'msg_err_add';
        exec = false;
    } else {
        if(!email.checkValidity()){
            document.getElementById('msg_err').innerHTML = "⚠️ L'email entrée n'est pas valide !";
            msg_err.className = 'msg_err_add';
            exec = false;
        } else {
            exec = true;
            hash_psw = HashPassword(mdp.value); // hash (ne fonctionne pas encore)
        }
    }
});

async function HashPassword(passwordToHash){  // fonction censée hasher le mot de passe mais erreur avec 'await'
    try{
        const salt = await bcrypt.genSalt(saltRounds);  // génère un 'sel', qui rend le hash encore plus complexe
        const hashedPassword = await bcrypt.hash(passwordToHash, salt);
        console.log(hashedPassword)
    }catch{
        alert('problème, man !')
    }
}
/*
if(exec){
    const { data, error } = await supabase
        .from('users')
        .insert({ id_conn: id_connexion.value, mdp_hash: mdp})
}*/