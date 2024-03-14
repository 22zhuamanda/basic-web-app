export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "amandaz"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Amanda"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);

      // Add all the numbers
      const sum = numbers.reduce((acc, num) => acc + num, 0);

      return `${sum}`;
    }
  }

  if (query.toLowerCase().includes("largest")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
    
    // Find the largest number
    const largest = Math.max(...numbers);
  
    return largest.toString();
  }}

  
  if (query.toLowerCase().includes("multiplied")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);
    
    /// Multiply all the numbers
    let product = 1;
    for (const num of numbers) {
      product *= num;
    }

    return `${product}`;
  }}

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    // Extract numbers from the query string
    const match = query.match(/\d+/g);

    if (match) {
      const numbers = match.map(Number);
    

    // Filter numbers that are both squares and cubes
    const resultNumbers = numbers.filter(number => Math.sqrt(number) % 1 === 0 && Math.cbrt(number) % 1 === 0);

    // Output the result numbers
    return `${resultNumbers}`;
  }}


  return "";
}
