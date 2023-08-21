# def sumNat(a):
#     for i in range(1,a):
#         a = a + i
    
#     return a

# n = int(input("Upto which number do you want to find the sum? \n"))
# print("The sum is:", sumNat(n))

# using recursion:
def sumNat_recursive(x):
    if x < 1:
        return 0
    else:
        return x + sumNat_recursive(x-1)

y = int(input("Upto which number do you want to find the sum? \n"))

print("The sum is:", sumNat_recursive(y))
