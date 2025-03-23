x = input()  
reversed_x = ""  

for digit in x[::-1]:
    reversed_x += digit  

print(int(reversed_x))
