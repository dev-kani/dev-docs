# 'first' represents the index of the first element in the list
# 'last' represents the index of the last element in the list

def binary_search(list: list, target: int):
    first_idx = 0
    last_idx = len(list) - 1

    while first_idx <= last_idx:
       midpoint = (first_idx + last_idx) // 2

       if list[midpoint] == target:
           return midpoint
       elif list[midpoint] < target:
           first_idx = midpoint + 1
       else:
           last_idx = midpoint - 1

    return None

def verify(index: int):
    if index is not None:
        print(f"Target found at index: {index}")
    else:
        print("Target not found in list")

numbers = [1, 2, 3, 4, 5, 6]

result = binary_search(numbers, 3)
verify(result)
