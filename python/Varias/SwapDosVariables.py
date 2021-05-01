# Swap with mathematics operations
m = 1
o = 4

#swap
m = m + o    # m = 4 + 1 = 5
o = m - o    # o = 5 - 4 = 1
m = m - o    # m = 5 - 1 = 4

print("New value of m: ", m)  # New value of m: 4
print("New value of o: ", o)  # New value of o: 1 

# otro método
m = 1
o = 4
m, o = o, m
print("New value of m: ", m)  # New value of m: 4
print("New value of o: ", o)  # New value of o: 1 
