const eye = document.getElementById('eye');
const eyeConfirm = document.getElementById('eye_confirm');
const valider = document.getElementById('valider');
const mdp = document.getElementById('mdp');
const confirmMdp = document.getElementById('confirm');
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://subkyvlpofepcqbegyvq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1Ymt5dmxwb2ZlcGNxYmVneXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTUwMzcsImV4cCI6MjA3MTg3MTAzN30.HsbZgSXl64lQMxk89adxJNhlJUdDkbvLC6HiZQmHkHM';
const supabase = createClient(supabaseUrl, supabaseKey);
const { data, error } = await supabase
    .from('users')
    .select('*')
console.log(data);
console.log(error);

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

valider.addEventListener('click', async (e) => {
    e.preventDefault() // empêche le rechargement

    let msg_err = document.getElementById('msg_err');
    const id_connexion = document.getElementById('id_connexion');
    if(id_connexion.value.trim() === ""){
        msg_err.innerHTML = "⚠️ Vous n'avez entré d'identifiant de connexion !";
        msg_err.className = 'msg_err_add';
        return;
    }
    const userName = document.getElementById('nom');
    if(userName.value.trim() === ""){
        msg_err.innerHTML = "⚠️ Vous n'avez entré de nom d'utilisateur !";
        msg_err.className = 'msg_err_add';
        return;
    }
    const email = document.getElementById('email');
    if(!email.checkValidity()){
        document.getElementById('msg_err').innerHTML = "⚠️ L'email entré n'est pas valide !";
        msg_err.className = 'msg_err_add';
        return;
    }
    if(mdp.value.trim() === ""){
        msg_err.innerHTML = "⚠️ Vous n'avez pas entré de mot de passe !";
        msg_err.className = 'msg_err_add';
        return;
    }
    if(confirmMdp.value.trim() === ""){
        msg_err.innerHTML = "⚠️ Vous n'avez pas confirmé votre mot de passe !";
        msg_err.className = 'msg_err_add';
        return;
    }
    if(mdp.value != confirmMdp.value){
        msg_err.innerHTML = '⚠️ Les mots de passe entrés doivent être identiques !';
        msg_err.className = 'msg_err_add';
        return;
    }
    const data = {mdp_hash: mdp.value};
    const res = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    const hashed = await res.text()
    const payload = {
        id_conn: id_connexion.value,
        mdp_hash: hashed,
        nom: userName.value,
        email: email.value
    };
    const { error } = await supabase
        .from('users')
        .insert(payload)
    if(error){
        const message = "⚠️ Il y a eu un problème lors de la création du compte :" + JSON.stringify(error);
        console.error("Supabase erreur : ", error);
        alert(message);
    } else {
        alert("Votre compte a été crée avec succès !");
        window.location.href = "http://localhost:3000/";
    }
});