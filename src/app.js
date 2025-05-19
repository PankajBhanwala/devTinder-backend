const express = require('express');

const app = express();

// will work
app.use("/namaste", (req, res) => {
    res.send("namaste ji namaste");
});

app.use("/", (req, res) => {
    res.send("Hello from server");
});

// will not work
app.use("/test", (req, res) => {
    res.send("test server");
});

app.listen(3000, () => {
    console.log("Server started successfully on port 3000");
});