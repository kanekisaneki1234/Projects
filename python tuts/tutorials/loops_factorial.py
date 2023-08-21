n = int(input("Enter n: \n"))

a = 1

# while n > 0:
#     a *= n
#     n-=1
#using for loop
for i in range(1, n+1):
    a = a * i
    
print("The factorial is",a)