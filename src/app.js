const express = require('express');

const app = express();

app.use("/", (req, res) => {
    res.send("Hello from server");
});


// will not work
app.use("/namaste", (req, res) => {
    res.send("namaste ji namaste");
});

app.listen(3000, () => {
    console.log("Server started successfully on port 3000");
});