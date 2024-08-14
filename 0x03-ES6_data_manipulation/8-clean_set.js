function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  const finalString = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      finalString.push(element.slice(startString.length));
    }
  }
  return finalString.join('-');
}
export default cleanSet;
