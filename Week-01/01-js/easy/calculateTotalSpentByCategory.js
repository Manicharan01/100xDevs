function calculateTotalSpentByCategory(transactions) {
  // Create an object to hold the total spent for each category
  const categoryTotals = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category is already in the object, add the price to the total
    // Otherwise, initialize the category with the current price
    if (category in categoryTotals) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  // Convert the categoryTotals object to an array of objects
  const result = [];
  for (const [category, total] of Object.entries(categoryTotals)) {
    result.push({ category: category, totalSpent: total });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
