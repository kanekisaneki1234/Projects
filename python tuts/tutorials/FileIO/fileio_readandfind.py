f = open('/Users/owais/tutorial_env/FileIO/sample.txt','r')
data = f.read()
print(data)

# using strings
if "twinkle" in data:
    print("found")
else:
    print("not found")

f.close()

# using lists 
# x = data.split()
# print(x)
# if "twinkle" in x:
#     print("found")
# else:
#     print("not found")

# f.close()

# searching using strings is faster and flexible than using lists cuz you can also search partial strings. Example: with strings, if you search for twink in the above program, it will return "found" but if you try it with lists, it will return "not found".

# for speed test, refer to below program

# str_test = "some string words "*100
# def search_in_string():
#     if "with" in (str_test):
#         return True
    
# ls_test = ["some", "string" "words"]*100
# def search_in_list():
#     if "with" in (ls_test):
#         return True

# import timeit
# print(timeit.timeit(search_in_string))
# ### 1.6317437500110827    

# print(timeit.timeit(search_in_list))
# # ### 1.654693207994569
