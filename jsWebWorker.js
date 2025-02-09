self.onmessage = function (event) {
  //We use onmessage in both files because Web Workers communicate using messages. Since they run in a separate thread, direct function calls don’t work, so message passing is the only way to send and receive data.
  // The Web Worker listens for messages using self.onmessage and processes the received data.

  if (event.data === "Start") {
    // Process message correctly
    let count = 0;
    for (let i = 0; i < 1e9; i++) {
      // Simulating heavy computation
      count++;
    }
    postMessage("Task Completed! Count: " + count); // Send result back
  } else {
    postMessage("Invalid message received!");
  }
};

// self.onmessage → Listens for messages from the main script.
// postMessage() → Sends the result back to the main thread.

// self.onmessage = function (messages) {
//   let len = parseInt(messages.data);
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     sum = sum + i;
//   }
//   postMessage(sum);
// };

// onmessage in jsWebWorker.js (Worker File)
// 📍 Purpose:

// Receives data from the main thread (using postMessage from jsWebAPIs.html).
// Processes the data (e.g., performs heavy calculations).
// Sends the result back to the main thread.
