# from dataclasses import replace
# import re
# file = open('/Users/owais/tutorial_env/FileIO/sample.txt','r')
# data = file.read()
# print(data)
# list_profanity = ["cuss", "word", "cussword", "cunt", "bitch", "bozo", "fuck"]
# # match = ""
# x = 0
# # for i in list_profanity:
# while x<len(list_profanity):
#     if list_profanity[x] in data:
#         data = data.replace(list_profanity[x],"#####")
#         # print(list_profanity[x])
#     x += 1
# print(data)
# file.close()

# with open('/Users/owais/tutorial_env/FileIO/sample.txt','w') as f:
#     f.write(data)

def censor(str,list):
    x = 0
# for i in list_profanity:
    while x<len(list):
        if list[x] in str:
            str = str.replace(list[x],"#####")
        # print(list_profanity[x])
        # else:
        #     print("The file is clean :)")
        x += 1
    return str
file = open('/Users/owais/tutorial_env/FileIO/sample.txt','r')
data = file.read()
list_profanity = ["cuss", "word", "cussword", "cunt", "bitch", "bozo", "fuck", "twinkle"]
print(censor(data, list_profanity))
