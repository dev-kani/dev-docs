def recursive_binary_serch(list:[], target:int):
    if len(list) == 0:
        return False
    else:
        midpoint = (len(list)) // 2
        if list[midpoint] == target:
            return True
        else:
            if list[midpoint] < target:
                return recursive_binary_serch(list[midpoint + 1:], target)
            else:
                return recursive_binary_serch(list[:midpoint], target)

def verify(result):
    print("Target found: ", result)

numbers = [1, 2, 3, 4, 5, 6]
result = recursive_binary_serch(numbers, 1)
verify(result)

