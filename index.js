const express = require('express');

const app = new express();

app.listen(4000, () => {
    console.log("App listening to port 4000");
});
app.use(express.static("public"));