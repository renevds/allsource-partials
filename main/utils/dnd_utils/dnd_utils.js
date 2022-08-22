export const reorderAList = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  console.log("List to manipulate:", result)
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const reorderAListToAList = (fromList, toList, startIndex, endIndex, limit) => {
  const resultFrom = Array.from(fromList);
  const resultTo = Array.from(toList);
  console.log("List to manipulate from:", fromList);
  console.log("List to manipulate to:", toList);

  if (resultTo.length === limit) {
    console.log("Limit reached!")
    const removedFrom = resultFrom.splice(startIndex, 1);
    const removedTo = resultTo.splice(resultTo.length - 1, 1);
    resultTo.splice(endIndex, 0, removedFrom[0]);
    resultFrom.splice(startIndex, 0, removedTo[0]);
    return ({ resultFrom, resultTo });
  } else {
    let [removed] = resultFrom.splice(startIndex, 1);
    resultTo.splice(endIndex, 0, removed);
    return ({ resultFrom, resultTo });
  }

};