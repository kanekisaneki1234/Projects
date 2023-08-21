m1 = int(input("Enter the marks for the first subject: \n"))
m2 = int(input("Enter the marks for the second subject: \n"))
m3 = int(input("Enter the marks for the third subject: \n"))
m4 = int(input("Enter the marks for the fourth subject: \n"))
m5 = int(input("Enter the marks for the fifth subject: \n"))
x = int(input("Enter the max marks for all subjects: \n"))
max_marks = x*5

grade = (m1+m2+m3+m4+m5)/max_marks*100

if grade > 90 and grade <= 100:
    print("Your grade is Ex, gg wp.")
elif grade > 80 and grade <= 90:
    print("Your grade is A, congrats!")
elif grade > 70 and grade <= 80:
    print("Your grade is B, good.")
elif grade > 60 and grade <= 70:
    print("Your grade is C, ya need sum improvement...")
elif grade > 50 and grade <= 60:
    print("You got a D lmao XD")
else:
    print("You got an F, I'm dead :skullemoji: ")

