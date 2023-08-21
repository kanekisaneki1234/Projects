class Programmer:
    company = "Microsoft"
    # salary = "69420"
    def __init__(self, name, product, salary):
        self.name = name
        self.product = product
        self.salary = salary
    def getInfo(self):
        print("The name of the", self.company, "employee is:", self.name, "\nThe name of the product is:", self.product, "\nThe salary of the employee is:", self.salary)

ammu = Programmer("Arman", "Discord", "69420")
ammu.getInfo()

#print(getattr(Programmer, 'company')) --> Microsoft