def stars(n):
    for i in range(n+1):
        print("*" * (n-i))

x = 5
#print(stars(x))

# prints none because there are 2 print staements and one doesn't execute

stars(x)
# now it doesn't print none, ggs :)

#using 2 variable iteration thingy 
# n=5
 
# i=1;j=0
# # while loop check the condition until the
# # condition become false. if it is true then
# # enter in to loop and print the pattern
# while(i<=n):
#     while(j<=i-1):
#         print("* ",end="")
#         j+=1
#      # printing next line for each row
#     print("\r")
#     j=0;i+=1