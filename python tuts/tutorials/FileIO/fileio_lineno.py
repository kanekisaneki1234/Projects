# f = open('/Users/owais/tutorial_env/FileIO/sample.txt','r')
# data = f.readlines()

# word = "python"

# x = 0
# # data = data.split()
# print(data)
# while x<len(data):
#     # print(type(data[x]))
#     if (word)==(data[x]):
#         print(x+1)
#     x += 1
# discarded cuz i can't figure out how to remove \n from the end

content = True
i = 1

with open('/Users/owais/tutorial_env/FileIO/sample.txt') as f:
    while content:
        content = f.readline()
        if "python" in content:
            print(content)
            print(i)
        i += 1