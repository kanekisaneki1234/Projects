class Vector_2d:
    def __init__(self, i, j):
        self.icap = i
        self.jcap = j
        # print("This is 2d vector")

    def __str__(self):
        return f"{self.icap}i + {self.jcap}j"
        
class Vector_3d(Vector_2d):
    def __init__(self, i, j, k):
        super().__init__(i, j)
        self.kcap = k

    def __str__(self):
        return f"{self.icap}i + {self.jcap}j + {self.kcap}k"

a = Vector_2d(2,3)
b = Vector_3d(5,6,7)

print(a)
print(b)