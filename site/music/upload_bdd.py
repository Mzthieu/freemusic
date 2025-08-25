import os

directory = '/home/mathieu/Documents/FreeMusic/music/titres'
with open("infos_bdd.csv", "w") as f:
    f.write("nm, nml, art, tit, nom_fichier\n")

for name in os.listdir(directory):
    complete_name = []
    part_name = ""
    for i in name:
        if i == "-":
            complete_name.append(part_name)
            part_name = ""
        else:
            part_name += i
    complete_name.append(part_name)
    nm = int(complete_name[0])
    nml = int(complete_name[1])
    art = str(complete_name[2])
    tit = str(complete_name[3]).split(".mp")

    with open("infos_bdd.csv", "a") as f:
        f.write(f"{nm}, {nml}, {art}, {tit[0]}, {name}\n")