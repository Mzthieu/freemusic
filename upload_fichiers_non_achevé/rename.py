import os

directory = "/home/mathieu/Documents/FreeMusic/music/Dclef-Just Piano"
for name in sorted(os.listdir(directory)):
    nom_complet = []
    part_nom = []
    print(name)
    for i in name:
        if i == "-":
            nom_complet.append(part_nom.copy())
            part_nom = []
        else:
            part_nom.append(i)
    if part_nom:
        nom_complet.append(part_nom.copy())
    
    nm = ''.join(nom_complet[0])
    nml = 2
    art = ''.join(nom_complet[2])
    tit = ''.join(nom_complet[3])
    nw_name = '-'.join([nm, str(nml), art, tit])
    try:
        ext = os.path.split(nw_name)
    except Exception as e:
        ''.join([nw_name, ".mp3"])

    print(nw_name)
    try:
        os.chdir(directory)
        os.rename(name, nw_name)
        print(f"Le fichier {name} a bien été renommé {nw_name}.")
    except Exception as e:
        print(e)
    print()