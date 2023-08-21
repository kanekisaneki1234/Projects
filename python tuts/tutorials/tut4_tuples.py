# a = (1,)
# print (a[0])
# print(a)

# a = []
# x = 0
# while x < 7:
#     a.append(input("Enter the fruit to be added\n"))
#     x += 1

# print("Here's the list of fruits you entered:", a)

marks = []
n = int(input("Enter the number of students: "))
y = 0
while y < n:
    
    marks.append(int(input("Enter the marks of the student:")))
    y += 1

print("The marks are as follows: ",marks)

marks.sort()

print("The sorted marks are as follows: ",marks)
