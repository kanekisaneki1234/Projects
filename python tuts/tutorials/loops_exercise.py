x = int(input("Enter the number whose table you want to print: \n"))

y = 1

# using for loop
for a in range(1,11):
    print(f"{x}x{a}={x*a}")
# while y <= 10:
#     z = x*y
#     print(x, "times", y, "is", z)
#     y += 1

# list = ["Harry", "Soham", "Sachin", "Rahul"]

# for a in list:
#     if a.startswith("S"):
#         print("Hello there,", a)