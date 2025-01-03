// Function that simulates a fetch operation with a promise
function fetchData(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!"); // If success is true, resolve the promise
        } else {
          reject("Error: Failed to fetch data"); // If success is false, reject the promise
        }
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  // Using the promise
  fetchData(true) // Change to false to simulate an error
    .then((message) => {
      console.log(message); // Handle successful resolution
    })
    .catch((error) => {
      console.error(error); // Handle rejection/error
    })
    .finally(() => {
      console.log("Operation completed (either success or failure).");
    });
  