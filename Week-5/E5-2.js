function vowelCount(str) {
    const vowelMap = new Map();
    const vowels = "aeiou";
    
    for(let char of str) {
      let lowerCaseChar = char.toLowerCase();
      if(vowels.includes(lowerCaseChar)) {
        if(vowelMap.has(lowerCaseChar)) {
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    
    return vowelMap;
  }
  const result = vowelCount("Hello World");
  console.log(result); 
    