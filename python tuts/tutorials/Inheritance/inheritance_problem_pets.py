class Animals:
    def __init__(self):
        print("This is the animal class")

class Pets(Animals):
    def __init__(self, kind):
        self.kind = kind

class Dogs(Pets):
    def __init__(self, kind, breed):
        super().__init__(kind)
        self.breed = breed
        print("WOOF! The dog is barking XD")

    def dogInfo(self):
        print(f"The animal type is {self.kind}. \nIt is a dog whose breed is {self.breed}.")

Spike = Dogs("domestic","husky")
Spike.dogInfo()