from unicodedata import name


favlang = {}
x = 0

while x<4:
    a = input("Enter your name:\n")
    y = input("Enter your favorite language: \n")
    x+=1
    favlang[a] = y

print(favlang)