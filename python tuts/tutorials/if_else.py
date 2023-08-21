# a = 69

# if (a is 68):
#     print("Yes")
# else:
#     print("No")

a = int(input("How many numbers do you want to enter?\n"))
b = []
c = 0
while c<a:
    b.append(int(input("Enter the number:\n")))
    c += 1

h = 0
g = 1
y = b

#print (len(b))
#print(y[h+1])
# while h<=len(y):
#     # print (y)
#     # print (y[1])
#     i = 0
#     j = 1
#     if y[i]>y[j]:
#         x=y[i]
#     else:
#         x=y[j]
#     i+=1
#     j+=1
#     c+=1
# ind_zero = y[h]
# i = y[h]-y[h+1]
# j = y[g]-y[g+1]
# for ind_zero in y:
#     if i > j:
#        x = y[h] 
#     else:
#         x = y[h+1] 
#         h+=1
max = y[0]

for a in y:
    if a > max:
        max = a 
print("The highest element is",a)

# print(y[i])
# print(y[j])