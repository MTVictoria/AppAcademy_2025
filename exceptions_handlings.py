x = -1

try:
    if x < 0:
        raise Exception("Sorry, no numbers below zero")
    print(x)
except NameError:
    print("Variable x is not defined")
except Exception as e:
    print(e)
else:
    print("Everything went well")
