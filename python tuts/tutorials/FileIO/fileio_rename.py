def rename(oldpath, newpath):
    import os
    with open(oldpath) as f:
        data = f.read()

    with open(newpath, 'w') as f:
        f.write(data)

    os.remove(oldpath)
    
rename("/Users/owais/tutorial_env/FileIO/score_copy.txt","/Users/owais/tutorial_env/FileIO/renamed.txt")