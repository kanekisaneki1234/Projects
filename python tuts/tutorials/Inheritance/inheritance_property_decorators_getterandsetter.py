class Employee:
    company = "Wipro"
    salary = 69420
    diwali_bonus = 5969

    @property
    def totalSalary(self):
        return self.salary + self.diwali_bonus
    @totalSalary.setter
    def totalSalary(self, val):
        self.diwali_bonus = val - self.salary

ammu = Employee()
# ammu.totalSalary = 69696
print(ammu.totalSalary)
print(ammu.diwali_bonus)
print(ammu.salary)