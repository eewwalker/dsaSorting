/** Sort array of strings in-place, case-insensitively. Returns array. */

function caseInsensitiveSort(arr: string[]): string[] {
  // const upperArr = arr.map(ele=> ele.toUpperCase());

  arr.sort((a: string, b: string): number => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    if (a.toLowerCase() === b.toLowerCase()) return 0;

  });



  return arr;
}

export { caseInsensitiveSort };