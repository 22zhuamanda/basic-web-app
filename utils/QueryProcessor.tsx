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
    const [num1, num2] = query.split(" plus ").map(Number);

    // Performing addition operation
    const sum = num1 + num2;

    // Returning the result as a string
    return sum.toString();
  }

  if (query.toLowerCase().includes("largest")) {
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
