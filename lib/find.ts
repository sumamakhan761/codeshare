export function find<T extends object>(a: T[], k: string): T { // T is a generic
  const match = a.find((item) => "id" in item && item.id === k);

  if (match) {
    return match!;
  }

  return a.at(0)!;
}

// The find function searches an array of objects (a) for an object with an id matching the given key (k). If a match is found, it returns the matching object; otherwise, it returns the first element of the array.
