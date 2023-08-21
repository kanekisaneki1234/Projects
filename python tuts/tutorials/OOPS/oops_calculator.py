from cmath import sqrt


class Calculator:
    def __init__(self, num):
        self.num = num

    def sqr(self):
        print(self.num*self.num)

    def sqrRoot(self):
        print(self.num**(0.5))

    def cube(self):
        print(self.num**3)

a = Calculator(100)
a.sqrroot()