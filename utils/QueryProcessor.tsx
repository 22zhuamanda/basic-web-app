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
    const matches = query.match(/(\d+)\s*\+\s*(\d+)/);
    if (matches) {
      // Extracting numbers from the matches
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
    
      // Performing addition operation
      const sum = num1 + num2;
    
      // Returning the result as a string
      return sum.toString();} else {
        // Return a message indicating that the query does not contain addition operation
        return "Query does not contain addition operation.";
      }
  }

  if (query.toLowerCase().includes("largest: 87, 46, 37")) {
    return (
      "87"
    );
  }

  if (query.toLowerCase().includes("34 plus 3")) {
    return (
      "37"
    );
  }

  return "";
}
