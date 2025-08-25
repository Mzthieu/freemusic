import os
import shutil

def orga(dir, nml):
    with open("infos.txt", "w") as f:
        f.write()
    
    for name in sorted(os.listdir(dir)):
        if '.m3u' in name:
            split = name.split('.')
            debut_nw_name = split[0]
            nw_name = debut_nw_name + "_" + nml + ".m3u"
        elif '.txt' in name:
            split = name.split('.')
            debut_nw_name = split[0]
            nw_name = debut_nw_name + "_" + nml + ".txt"
        elif '.mp3' in name:
            complete_name = []
            part_name = []
            for i in name :
                if i == "-":
                    complete_name.append(part_name.copy())
                    part_name = []
                else:
                    part_name.append(i)
            if part_name: complete_name.append(part_name.copy())
            
            nm = ''.join(complete_name[0])
            art = ''.join(complete_name[2])
            tit = ''.join(complete_name[3])
            infos = '-'.join([nm, nml, art, tit, "+\n"])

            with open("infos.txt", "a") as f:
                f.write(infos)

            nw_name = '-'.join([nm, nml, art, tit])
        os.rename(name, nw_name)
        shutil.move(nw_name, "titres")





os.chdir("/home/mathieu/Documents/FreeMusic/music")
f = open('nml.txt', 'r')
nml = f.read()
list_dir = os.listdir()
music_content = ['nml.txt', 'licences', 'Nom_fichier.txt', 'infos.txt', 'tri.js', 'tri.py', 'titres', 'playlists']

for new in list_dir:
    if new not in music_content:
        pass # orga(new, nml)