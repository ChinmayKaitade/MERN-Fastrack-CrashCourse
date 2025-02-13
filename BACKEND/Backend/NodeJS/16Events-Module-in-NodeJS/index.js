//* Import EventEmitter class
const EventEmitter = require("events");

//* Create an instance of EventEmitter
const emitter = new EventEmitter();

//? 1. Define an event listener (addListener)
emitter.on("greet", () => {
  console.log(`Hello Chinmay Kaitade`);
});

//? 2. Trigger (emit) the "greet" event
emitter.emit("greet");

//* You can also pass arguments while emitting.
// emitter.on("greet", (username) => {
//   console.log(`hello ${username}`);
// });

//? 2. Trigger (emit) the "greet" event
// emitter.emit("greet", "Chinmay Kaitade", "Full Stack Dev");

// emitter.on("greet", (username, role) => {
//   console.log(`hello ${username}, You are a ${role}, ri8`);
// });

//? 2. Trigger (emit) the "greet" event
// emitter.emit("greet", "Chinmay Kaitade", "Full Stack Dev");

//! but it's best idea to take a single argument as an object.

emitter.on("greet", (arg) => {
  console.log(`hello ${arg.username}, You are a ${arg.role}, ri8`);
});

//? 2. Trigger (emit) the "greet" event
emitter.emit("greet", { username: "Chinmay Kaitade", role: "Full Stack Dev" });
