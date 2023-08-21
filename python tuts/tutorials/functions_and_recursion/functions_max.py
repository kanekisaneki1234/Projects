def maxNum(list):
    return max(list)

a = []
b = 1

while b == 1:
    a.append(int(input("Enter the numbers:\n")))
    b = int(input("Press 1 to continue, else press any key."))

print("The max number is: ", maxNum(a))
    


# list = [68, 100, 67]
# print(max(list))