function doTask1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Task 1 done');
        resolve();
      }, 1000);
    });
  }
  
  function doTask2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Task 2 done');
        resolve();
      }, 2000);
    });
  }
  
  function doTask3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Task 3 done');
        resolve();
      }, 1500);
    });
  }
  
  async function doTasksAsync() {
    try {
      await doTask1();
      await doTask2();
      await doTask3();
      console.log('All tasks done');
    } catch (err) {
      console.error(err);
    }
  }
  
  doTasksAsync();
  