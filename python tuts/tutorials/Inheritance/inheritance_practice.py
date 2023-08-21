class College:
    college = "VIIT"
    # department = "ENTC"

class Ai(College):
    department = "AI"
    print("This is department constuctor!")

class Staff(Ai):
    def __init__(self, classteacher, subjectteacher):
        self.classteacher = classteacher
        self.subjectteacher = subjectteacher
    
class NonTeachingStaff(Ai):
    department = "ENTC"
    def __init__(self, post):
        self.post = post
        super().__init__()
        print(super().department)
        print("The department is", self.department)
        print("The post is", self.post)

rupeshsir = NonTeachingStaff("subjectteacher")
print(rupeshsir.college)