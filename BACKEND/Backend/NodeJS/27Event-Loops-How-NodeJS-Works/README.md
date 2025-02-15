# How Node.js Works: V8 Engine, Event Loops, and Worker Threads 🚀❤️‍🔥

### Synchronous Code

- Tasks are executed sequently
- Each task blocks the next until completed

```javascript
const data = fs.readFileSync("example.txt", "utf-8");
console.log("File Content:", data);
```

### Asynchronous Code

- Task don't block execution
- Uses callbacks, promises, or async/await

```javascript
const data = fs.readFileSync("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error Reading File");
    return;
  }
  console.log("File Content:", data);
});
console.log("Outside Code");
```
