# shoping_cart.py
foods = []
prices = []
total = 0

while True:
    food = input("Enter a food to buy or press q to quit: ")
    if food.lower() == 'q':
        break
    price = float(input(f"Enter the price of the {food}: R"))
    foods.append(food)
    prices.append(price)

print("---- YOUR CART ----")
for i in range(len(foods)):
    print(f"{foods[i]}: R{prices[i]}")
    total += prices[i]

print(f"\nYour total is: R{total}")
