let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }
  typeCache[<string>label] = true;
  return <T>label;
}

export function deserialize<T>(json): T[] {
  let collection: T[] = [];
  json.map((item: T) => {
    collection.push(item);
  });
  return collection;
}
