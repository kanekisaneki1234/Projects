myDict = {
    "ladka" : "boy",
    "ladki" : "girl",
    "khush" : "happy"
}

print("The options are: ", myDict.keys())
search = input("Enter the hindi word to look for: \n")

print("The meaning of your word in english is: \n", myDict.get(search))

