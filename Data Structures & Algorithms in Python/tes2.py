array1 = [2, 3, 56, 5]
index = 2
value = 4

new_array = []  # Create a new empty list

for i, element in enumerate(array1):
    if i == index:
        new_array.append(value)  # Insert the new value at the specified index
    new_array.append(element)  # Add the current element to the new list

array1 = new_array  # Assign the new list to the original variable

print(array1)



for index, fruit in enumerate(array1):
    print(f"{index}, {fruit}")



