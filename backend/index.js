import express from "express";
import messages from "./user.js";

const app = express();

app.get("/", (req, res) => {
    res.send("server is ready");
});

app.get("/user/", (request, response) => {
    response.send(messages);
});

app.listen(3000, () => {
    console.log("server at 3000");
    console.log(messages);
});
