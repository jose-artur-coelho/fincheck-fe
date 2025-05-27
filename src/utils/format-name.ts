export function formatName(name: string) {
  const nameArray = name.split(' ');
  if (nameArray.length > 1) {
    return (nameArray[0][0] + nameArray[1][0]).toUpperCase();
  } else {
    if (nameArray[0].length < 2) {
      return nameArray[0][0].toUpperCase();
    }
    return (nameArray[0][0] + nameArray[0][1]).toUpperCase();
  }
}
