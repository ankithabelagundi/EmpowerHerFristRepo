let intervalId = setInterval(() => {
    console.log("Loading...");
},1000);
setTimeout(()=>{
    console.log("Loaded Sucessfully!")
    clearInterval(intervalId)
},5000);