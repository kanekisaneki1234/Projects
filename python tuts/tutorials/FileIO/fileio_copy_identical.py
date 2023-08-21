# with open('/Users/owais/tutorial_env/FileIO/score.txt') as f:
#     data = f.read()
#     print(data)
# f = open('/Users/owais/tutorial_env/FileIO/score_copy.txt','w')
# f.write(data)
# f.close()
# f = open('/Users/owais/tutorial_env/FileIO/score_copy.txt')
# print(f.read())
def identical(file1,file2):
    f = open(f'{file1}')
    f2 = open(f'{file2}')
    data1 = f.read()
    data2 = f2.read()
    if data1 == data2:
        print("They are identical.")
    else:
        print("Not identical.")
    f.close()
    f2.close()

identical("/Users/owais/tutorial_env/FileIO/score.txt","/Users/owais/tutorial_env/FileIO/score_copy.txt")