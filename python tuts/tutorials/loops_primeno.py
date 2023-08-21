
x = int(input("Enter the number to check: \n"))
z = False
if x > 1:
    for num in range(2,x):
        if (x % num) == 0:
            z = True
            break

if z:
    print("The given number is not a prime number.")
else:
    print("The given number is a PRIME NUMBER.")

# # To take input from the user
# num = int(input("Enter a number: "))

# # define a flag variable
# flag = False

# # prime numbers are greater than 1
# if num > 1:
#     # check for factors
#     for i in range(2, num):
#         if (num % i) == 0:
#             # if factor is found, set flag to True
#             flag = True
#             # break out of loop
#             break

# # check if flag is True
# if flag:
#     print(num, "is not a prime number")
# else:
#     print(num, "is a prime number")