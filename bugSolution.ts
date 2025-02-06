function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }
  return numA + numB;
}

let result = add(1, 2); // Correct
let result2 = addSafe(1, "2"); // safe solution
let result3 = addSafe("1", "2"); // safe solution