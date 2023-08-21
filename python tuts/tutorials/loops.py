# i = 1

# while i <= 50:
#     print(i)
#     i += 1

list = []
x = 1
while x == 1:
    list.append(input("Enter the elements: \n"))
    x = int(input("Enter 0 if you want to exit else enter 1."))

y = 0
while y < len(list):
    print(list[y])
    y += 1