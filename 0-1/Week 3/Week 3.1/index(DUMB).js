// import express from "express";
const express = require("express")
const app = express();

app.get("/health-checkup", function (req, res) {
    const username = req.headers.username;
    const password = req.headers.password;

    const kidneyId = req.query.kidneyId;

    if (!(username === "prince" && password === "pass")) {
        res.status(400).json({ msg: "wrong with ur input" })
        return
    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({ msg: "wrong with ur kidney input" })
        return
    }
    res.json({
        msg: "everything is fine!"
    })
});

app.listen(3000)

