def rock_paper_scissors(player):
    import random

    x = random.randint(1,3)

    if x == 1:
        comp = "rock"
    elif x == 2:
        comp = "paper"
    else:
        comp = "scissors"

    print(comp)

    flag = "."
    if player == "r":
        if comp == "paper":
            flag = False
        elif comp == "scissors":
            flag = True
        else:
            flag = None
    elif player == "p":
        if comp == "scissors":
            flag = False
        elif comp == "rock":
            flag = True
        else:
            flag = None
    elif player == "s":
        if comp == "rock":
            flag = False
        elif comp == "paper":
            flag = True
        else:
            flag = None
    else:
        flag = "Invalid"
        print("Invalid choice, just like your life XD")

    if flag != "Invalid":
        if flag == False:
            print("You lose...")
        elif flag == None:
            print("Try again...")
        elif flag == True:
            print("You win!")

player = input("Your turn player, press r, p or s for you know what \n")

rock_paper_scissors(player)
