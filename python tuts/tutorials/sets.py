# a = set()
# print(a)
# print(type(a))

a = {1,2,3}

a.add(4)
print(a)
b = (1,2,3)
a.add(b)
print(a)
print(len(a))
a.remove(b)
print(a)
print(len(a))

# a = (1,)
# print(a)
# print(type(a))