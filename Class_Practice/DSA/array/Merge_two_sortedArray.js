function mergeArrays(n, A, m, B) {
    // Create a new array to hold the merged result
    let mergedArray = [];
    let i = 0, j = 0;
  
    // Merge both arrays while maintaining sorted order
    while (i < n && j < m) {
      if (A[i] <= B[j]) {
        mergedArray.push(A[i]);
        i++;
      } else {
        mergedArray.push(B[j]);
        j++;
      }
    }
  
    // Add remaining elements from A (if any)
    while (i < n) {
      mergedArray.push(A[i]);
      i++;
    }
  
    // Add remaining elements from B (if any)
    while (j < m) {
      mergedArray.push(B[j]);
      j++;
    }
  
    // Return the resulting merged array
    return mergedArray;
  }
  
  // Example usage:
  const n = 4; 
  const A = [1, 3, 5, 7];
  const m = 3;
  const B = [2, 4, 6];
  const result = mergeArrays(n, A, m, B);
  
  // Print the merged array
  console.log(result.join(" "));
  