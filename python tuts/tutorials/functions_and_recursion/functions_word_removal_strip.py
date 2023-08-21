def word_removal(string, word):
# print(list)
    string2 = string.replace(word, "")
    print(string2.strip())

key = "hen"
x = "   hen    and ajax    "
(word_removal(x, key))

# def word_removal_list(list, word):
#     list.remove(word)
#     return list

# key = "Hen"
# list = ["Hen", "Goat", "Sheeple"]
# print (list)
# x = word_removal_list(list, key)
# print (x)

# x = "Hen"
# y = ["Hen", "Goat", "Sheeple"]
# if x in y:
#     list2 = y.remove(x)

# print(y)