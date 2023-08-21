class Number:
    def __init__(self,num):
        self.num = num

    def __add__(self, num2):
        print("This is overloading the addition operator")
        return self.num / num2.num
        
    def __str__(self):
        num = str(self.num)
        return num

    def __len__(self):
        return 1

n1 = Number(10)
n2 = Number(20)
print(n1)
print(len(n1))
print(n1 + n2)

# you can literally change what an operator can do with this :)
# locally obviously