def multiplication(num):
    for i in range(2,num+1):
        for a in range(1,11):
            f = open(f'/Users/owais/tutorial_env/FileIO/multiplication_{i}.txt','a')
            f.write(f"{i}x{a} = {a*i}\n")
            print(f"{i}x{a} = {a*i}")
            a += 1
            f.close() 

multiplication(20)
