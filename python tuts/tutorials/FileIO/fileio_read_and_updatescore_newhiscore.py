point = 0
i = 1
while i <= 5:
    player = input("Your turn player, press r, p or s for you know what \n")
    print("Round", i, "!")
    
    import random

    x = random.randint(1,3)

    if x == 1:
            comp = "rock"
    elif x == 2:
        comp = "paper"
    else:
        comp = "scissors"

    print("The computer chooses:",comp)

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
        print("Invalid choice, just like your life XD\n")
        i -=1

    if flag != "Invalid":
        if flag == False:
            print("You lose...\n")
        elif flag == None:
            print("It's a tie :\ Try again...\n")
            i -= 1
        elif flag == True:
            point += 1
            print("You win!\n")
        score = point*10
        print("You have", point, "points. The score is:", score)
    i += 1    

f = open('/Users/owais/tutorial_env/FileIO/score.txt')
score2 = f.read()
if score2 == '' or int(score)>int(score2):
    f = open('/Users/owais/tutorial_env/FileIO/score.txt', 'w')
    data = f.write(str(score))
    f.close()
if score2 =='' or int(score)>int(score2):
    f = open('/Users/owais/tutorial_env/FileIO/score.txt')
    data = f.read()
    print("Congratulations! You beat the high-score!\nThe new highscore is",data)
else:
    print("Sorry, you couldn't beat the highscore :(\nBetter luck next time! :)")
# figure out how to update highscore befpre printing and retry for invalid response