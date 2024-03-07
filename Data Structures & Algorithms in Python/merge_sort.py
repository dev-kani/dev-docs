# Sort a list in ascending order
# Return a new sorted list
# Divide: Find the midpoint of the list and divide into sublist
# Conquer: Recursively sort the sublist created in previous step
# Combine: Merge the sorted sublist created in previous step

def merge_sort(list):

    if len(list) <= 1:
        return list

    left_half, right_half = split(list)
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left, right)

def split(list):
    # Divide the unsorted list a midpoint into sublist
    # Return two sublist - left and right
    mid = len(list) // 2
    left = list[:mid]
    right = list[mid:]

    return left, right

def merge(left, right):
    # Merges two lists (arrays), sorting them in the process
    # Return a new merged list
    l = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            l.append(left[i])
            i += 1
        else:
            l.append(right[j])
            j += 1

    while i < len(left):
        l.append(left[i])
        i += 1

    return l

alist = [5, 9, 4, 7, 2, 1, 4, 8, 3, 6]
abc = merge_sort(alist)
print(abc)
