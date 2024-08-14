export const myWeakMap = new WeakMap();

export function queryAPI(endPoint) {
  let count = myWeakMap.get(endPoint) || 0;
  count += 1;

  myWeakMap.set(endPoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
