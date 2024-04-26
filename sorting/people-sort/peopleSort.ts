type tPerson = { fname: string, lname: string; };

/** Sort array of persons in place (lname > fname). Returns array. */

function peopleSort(arr: tPerson[]): tPerson[] {

  arr.sort((a: { fname: string, lname: string; }, b: { fname: string, lname: string; }): number => {
    if (a.lname.toLowerCase() === b.lname.toLowerCase()) {
      return a.fname < b.fname ? -1 : 1;
    }
    return a.lname.toLowerCase() < b.lname.toLowerCase() ? -1 : 1;

  });

  return arr;
}

export { peopleSort };
