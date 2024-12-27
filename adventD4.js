def organize_shoes(shoes):
    unmatched = {}
    matched_pairs = []

    for shoe in shoes:
        shoe_type = shoe['type']
        size = shoe['size']

        if size not in unmatched:
            unmatched[size] = {'I': 0, 'R': 0}

        if shoe_type == 'I':
            if unmatched[size]['R'] > 0:
                unmatched[size]['R'] -= 1  # Pair with an unmatched right shoe
                matched_pairs.append(size)  # Record the matched pair
            else:
                unmatched[size]['I'] += 1  # Add to unmatched left shoes
        elif shoe_type == 'R':
            if unmatched[size]['I'] > 0:
                unmatched[size]['I'] -= 1  # Pair with an unmatched left shoe
                matched_pairs.append(size)  # Record the matched pair
            else:
                unmatched[size]['R'] += 1  # Add to unmatched right shoes

    # Filter sizes with any unmatched shoes
    leftover_sizes = [size for size in unmatched if unmatched[size]['I'] > 0 or unmatched[size]['R'] > 0]

    return {"matched_pairs": matched_pairs, "leftover_sizes": leftover_sizes}

