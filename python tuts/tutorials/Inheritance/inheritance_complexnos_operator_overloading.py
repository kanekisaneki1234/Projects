class Complex:
    def __init__(self,realpart,imaginarypart):
        self.realpart = realpart
        self.imaginarypart = imaginarypart
        print(f"The number is {self.realpart} + {self.imaginarypart}i")
    
    def __add__(self, num):
        return complex(self.realpart + num.realpart, self.imaginarypart + num.imaginarypart)
    
    def __mul__(self, num):
        return f"{(self.realpart*num.realpart) - (self.imaginarypart*num.imaginarypart)} + ({self.realpart*num.imaginarypart + self.imaginarypart*num.realpart})i"
        # (ac - bd) + (ad + bc)i

c1 = Complex(3,2)
c2 = Complex(1,7)
print(c1 + c2)
print(c1*c2)