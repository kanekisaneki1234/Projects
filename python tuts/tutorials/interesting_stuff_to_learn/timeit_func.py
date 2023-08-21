str_test = "some string words "*100
def search_in_string():
    if "with" in (str_test):
        return True
    
ls_test = ["some", "string" "words"]*100
def search_in_list():
    if "with" in (ls_test):
        return True

import timeit
print(timeit.timeit(search_in_string))
### 1.6317437500110827    

print(timeit.timeit(search_in_list))
# ### 1.654693207994569
