i = 1

for num in range(2,101):   

   for i in range(2,num):
    if num % i == 0:
        continue
    print(num)
else: 
    pass
   
   # check for factors
        # for i in range(2,num):
        #     if (num % i) == 0:
        #         continue
        #     print(num)
        #     break
        # else:
        #     print(num,"is a prime number")
       
# if input number is less than
# or equal to 1, it is not prime
    # else:
    #     print(num,"is not a prime number")