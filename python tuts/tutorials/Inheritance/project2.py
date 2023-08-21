import random
cor_guess = random.randint(1,10)

guess = 0
guess = int(input("Enter the number you want to guess: "))
n = 1
while cor_guess != guess:
    if guess in range(1,11):
        if guess>cor_guess:
            print("The number you entered is higher than the guess, choose a lower number and try again :|")
            guess = int(input("Enter the number you want to guess again: "))
        
        elif guess<cor_guess:
            print("The number you entered is lower than the guess, choose a higher number and try again :|")
            guess = int(input("Enter the number you want to guess again: "))
    else:
        print("Enter a number within the valid range an try again :|")
        guess = int(input("Enter the number you want to guess again: "))
    n += 1
else: 
    print("You have guessed the correct number! You took", n, "turns to guess it correctly. GG WP")

new_hiscore = 0
f = open('/Users/owais/tutorial_env/hiscore_project2.txt','r+')
content = f.read()
# After reading, the cursor or pointer moves to the point till we have read so we have to seek it to poisition 0 in order to overwrite previous values
f.seek(0)
if content == "":
    new_hiscore = n
    f.write(str(new_hiscore))
elif n < int(content):
    new_hiscore = n
    f.write(str(new_hiscore))

f.close()

print("The currect hiscore is:", content)