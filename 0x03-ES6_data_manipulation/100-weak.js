export const myWeakMap = new WeakMap();

function queryAPI(endPoint){
  if(!myWeakMap.has(endPoint)) {
    myWeakMap.set(endPoint, 0);
  }

  let count = myWeakMap.get(endPoint) + 1;
  myWeakMap.set(endPoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high')
  }
}
export default queryAPI;
