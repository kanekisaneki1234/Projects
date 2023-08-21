# maps or combines two functions or iterables:
def addition(n):
    return n + n

x = [1,2,3,4]

y = map(addition,x)
print(list(y))