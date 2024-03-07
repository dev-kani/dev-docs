
# Return index position of the target if found, else return None
def linear_search(list, target):
    for i in range(0, len(list)):
       if list[i] == target:
           return i
    return None

def verify(index: int):
    if index is not None:
        print(f"Target found at index: {index}")
    else:
        print("Target not found in list")

numbers = [1, 2, 3, 4, 5, 6]

result = linear_search(numbers, 10)
verify(result)


