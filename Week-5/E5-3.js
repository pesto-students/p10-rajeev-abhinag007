function hasDuplicate(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (set.has(arr[i])) {
        return true;
      }
      set.add(arr[i]);
    }
    return false;
  }
  
  console.log(hasDuplicate([1, 5, -1, 4])); 
  console.log(hasDuplicate([1, 5, -1, 5])); 
  