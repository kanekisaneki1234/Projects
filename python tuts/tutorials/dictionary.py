myDict = {
    "white-hair" : ["Gojo","Killua","kaneki"],
    "black-hair" : ['Roy Mustang',"Fushiguro", 'Koutarou Amon'],
    'golden-hair' : ['Edward Elric', 'Alphonse Elric','Riza Hawkeye'],
    'akagami' : ["Erza Scarlet",'Shanks'],
}

print(myDict.items())

additionalDict = {
    'multi-colored' : ["Vegeta","Goku","Trunks"]
}
myDict.update(additionalDict)

print(myDict)