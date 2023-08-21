class Employee:
    company = "Tata"
    salary = 69696
    increment = 6969
    @property
    def totalSalary(self):
        return self.salary + self.increment
    @totalSalary.setter
    def totalSalary(self, val):
        self.increment = val - self.salary

anuj = Employee()
anuj.increment = 9420
print(anuj.totalSalary)
print(anuj.increment)
print(anuj.salary)

        

