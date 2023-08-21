class Vector:
    def __init__(self, dim):
        self.dim = dim

    def __str__(self):
        str_vec = ""
        x = 1
        for i in range(len(self.dim)-1):
            str_vec += f" {self.dim[i]}x{x} +"
            x += 1
        str_vec += f" {self.dim[-1]}x{x} "
        return str_vec

    # def __add__(self,num):
    #     sum = ""
    #     x = 1
    #     for i in range(len(self.dim)):
    #         sum += f" {(self.dim[i] + num.dim[i])}x{x} +"
    #         x+=1
    #     return sum[:-1]

    # def __mul__(self, num):
    #     dotprod = 0
    #     for i in range(len(self.dim)):
    #         dotprod += self.dim[i]*num.dim[i]
    #     return dotprod

    def __len__(self):
        # x = 0
        # while x<(len(self.dim)):
        #     x+=1

        return len(self.dim)

v1 = Vector([7,8,6,0])
v2 = Vector([1,2,3])

# print(v1, v2)
# print(v1+v2)
# print(v1*v2)
print(len(v1))

