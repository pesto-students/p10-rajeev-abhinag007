function myPromise(resolveCallback, rejectCallback) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    const resolutionTime = Math.floor(Math.random() * 2000) + 1000; // Randomize the resolution time between 1 and 3 seconds
    const rejectionTime = Math.floor(Math.random() * 2000) + 1000; // Randomize the rejection time between 1 and 3 seconds
  
    if (randomNumber % 5 === 0) {
      setTimeout(() => {
        rejectCallback(`Random number ${randomNumber} is divisible by 5`);
      }, rejectionTime);
    } else {
      setTimeout(() => {
        resolveCallback(randomNumber);
      }, resolutionTime);
    }
  }
  
  myPromise(
    function(number) {
      console.log(`The generated number is ${number}`);
    },
    function(errorMessage) {
      console.error(errorMessage);
    }
  );
  