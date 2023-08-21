def max_num_in_list( list ):
    max = list[0]
    for a in list:
        if a > max:
            max = a
    return max

b = [0]
x=0
y=int(input("how many numbers do you want to enter?\n"))
while y>x:
    b.append(int(input("enter the number:\n")))
    x+=1

print(max_num_in_list(b))