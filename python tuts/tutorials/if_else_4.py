# # text = input("Enter the text: ")

# # if "make a lot of money" or "buy now" or "subscribe this" or "click this" in text:
# #     print("This is a spam comment.")

# # text = input("Enter the text: ")
# # print(len(text))
# # if len(text)<10:
# #     print("yes.")
# # else:
# #     print("no.")

# list = []
# x = int(input("Enter the amount of names you want to enter: \n"))
# y = 0
# while y < x:
#     list.append(input("Enter the names:\n"))
#     y+=1

# search = input("Enter the word to search:\n")

# if search in list:
#     print("Found.")
# else:
#     print("Not found.")

comment = input("Enter the comment:\n")
string = "harry"
if string.casefold() in comment.casefold():
    print("This comment is about harry.")
else:
    print("This comment is not about harry.")