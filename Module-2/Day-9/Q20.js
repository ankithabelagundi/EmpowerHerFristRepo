function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    show: function () {
      console.log("Current count:", count);
    }
  };
}
const counter= createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement();
