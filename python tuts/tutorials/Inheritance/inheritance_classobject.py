class College:
    college = "VIIT"

    # def Col2(self, college2):
    #     self.__class__.college = college2
    #     print(self.college)
    @classmethod
    def Col2(cls, college2):
        cls.college = college2
        # print(self.college)

a = College()
print(a.college)
a.Col2("VU")
print(a.college)