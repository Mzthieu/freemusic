<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="index.css">
        <script defer src="https://friconix.com/cdn/friconix.js"></script> 
        <title>FREEMUSIC</title>
    </head>
    <body>
        <header>On verra bien pour ici</header>
        <div class="container">
            <main style="width: 70%;">
                <h1>Trouver qq chose à mettre ici</h1>
            </main>
            <section>
                <div class="imgBox">
                    <img src="images/piano.avif">
                    <div class="mask"></div>
                </div>
                <div class="pre-controls">
                    <pre style="margin-left: 10px;font-size: 1.1em;;"><strong>I_taca</strong> • Oscar Avila</pre>
                    <button><i id="heart" class="fi-xnluxl-heart"></i></button>
                </div>
            </section>
        </div>
        <footer>
            <img src="images/piano.avif">
            <article>
                <div class="title align">
                    <p><strong>I_taca</strong><br>Oscar Avila</p>
                </div>
                <audio id="audio" class="align">
                    <source src="music/titres/001-1-Oscar Avila-I_taca.mp3" type="audio/mpeg">
                </audio>
            </article>
            <div class="controls align">
                <div class="first-floor">
                    <button><i id="backward" class="fi-xnsdxl-forward-solid"></i></button>
                    <button><i id="play" class="fi-xnsuxl-play-solid"></i></button>
                    <button><i id="forward" class="fi-xnsuxl-forward-solid"></i></button>
                </div>
                <div class="second-floor">
                    <p id="current-time">0:00</p><input id="seek" style="margin-top: 0.5vw;" type="range" value="0" min="0" max="1000"><p id="total-time"></p>
                </div>
            </div>
        </footer>

        <form method="post"><input name="ad_bdd" type="submit" value="Ajouter les infos à la base de données."></form>
        <?php
            if(isset($_POST['ad_bdd'])){
                $fichier = "/home/mathieu/Documents/FreeMusic/infos_bdd.csv";
                if(!file_exists($fichier)){
                    die("Le fichier n'a pas été trouvé");
                }  // vérifie que le fichier existe bien
                
                $contenu = fopen($fichier, 'r');
                if($contenu === false){
                    die("Le fichier n'a pas pu être ouvert");
                } // ouvre le fichier

                $result = [];
                $entetes_deja = false;
                while (($data = fgetcsv($contenu, 0, ',')) !== false) {
                    if($entetes_deja === false){
                        $entetes = $data;
                        if ($entetes && isset($entetes[0])) {
                            $entetes[0] = preg_replace('/^\xEF\xBB\xBF/', '', $entetes[0]);
                        } // lit les entêtes et les stocke dans un tableau
                        print_r($entetes);
                        $entetes_deja = true;
                    }
                    $ligne = [];
                    for($i=0; $i<count($data); $i++){
                        $ligne[$entetes[$i]] = $data[$i];
                    };
                    $result[] = $ligne;
                };

                try{
                    $connexion = new PDO('mysql:host=sql200.infinityfree.com;dbname=if0_39647451_freemusic', 'if0_39647451', 'wi5xPROJgalere');
                    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                }catch(PDOException $e){
                    echo 'Il y a eu un problème lors de la connexion à la base de données : ' . $e->getMessage();
                }
            }
        ?>

        <script src="index.js"></script>
    </body>
</html>
