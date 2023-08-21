class Train:

    # seats = 300

    def __init__(self, town, fare, timing, platform, seats):
        print("********Welcome to the ticket booking system by Indian Railways********")
        self.town = town
        self.fare = fare
        self.timing = timing
        self.platform = platform
        self.seats = seats
        # self.seatno = seatno

    def bookTicket(self):
        if self.seats>0:
            print("Your ticket for the town", self.town,"has been booked and is scheduled for the time", self.timing,"on platform no.", self.platform)
            self.seats = self.seats - 1
        
    def getStatus(self):
        print("The number of seats available is:", self.seats, "\nThe Departure time is:", self.timing,"\nThe train will arrive at platform:", self.platform,"\nYour seat number is:", self.seats,"\nThe train is departing for:",self.town)

    def fareInfo(self):
        print("The fare for train departing to", self.town, "is:", self.fare)

Indrayani = Train("Vashi","Rs 100","12:30 pm","S8", 100)
x = 0
y = int(input("Enter the number of tickets you want to book:"))
while y>x:
    str = input("Enter 'YES' to confirm your purchase:\n")
    if str.casefold() == "yes":
        Indrayani.bookTicket()
        Indrayani.fareInfo()
        Indrayani.getStatus()
    else:
        print("Your purchase has been cancelled.")
    x+=1

# can also try to implement ticket booking system using lists and appending

