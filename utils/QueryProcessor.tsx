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

  
  if (query.toLowerCase().includes("cube")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match) {
      const numbers = match.map(Number);


      for (const num of numbers) {
        // Check if the number is a perfect square
        const sqrt = Math.sqrt(num);
        if (Number.isInteger(sqrt)) {
          // Check if the square root is also a perfect cube
          const cubeRoot = Math.cbrt(num);
          if (Number.isInteger(cubeRoot)) {
            // Return the number if it's both a perfect square and a perfect cube
            return `${num}`;
          }
        }
      }

    }
  }

  if (query.toLowerCase().includes("minus")) {
    // Extract numbers from the query
    const match = query.match(/\d+/g);
    if (match && match.length >= 2) {
        const [num1, num2] = match.map(Number);

        // Calculate the result
        const result = num1 - num2;
        return `${result}`;}
  }

  // function isPrime(number) {
  //   if (number <= 1) return false;
  //   if (number <= 3) return true;
  //   if (number % 2 === 0 || number % 3 === 0) return false;
  //   let i = 5;
  //   while (i * i <= number) {
  //       if (number % i === 0 || number % (i + 2) === 0) return false;
  //       i += 6;
  //   }
  //   return true;
  // }

  if (query.toLowerCase().includes("power")) {
    // Extract the base and exponent from the query string
    const match = query.match(/\d+/g);
    if (match) {
        const [base, exponent] = match.map(Number);

        // Calculate the result
        const result = Math.pow(base, exponent);


      // Output the result
      return `${result}`;}
  }

  return "";
}
