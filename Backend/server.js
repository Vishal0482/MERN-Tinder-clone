import express from 'express';
import mongoose from 'mongoose';
import Cards from './schema/dbCards.js';
import cors from 'cors';
import mongoUrl from './config.js';

// App config
const app = express(); //Instances
const port = process.env.PORT || 8001;
const connection_url = mongoUrl;

//Middlewares 
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url);

//API endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello world");
})
app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
});

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
});

// Listner
app.listen(port, () => {
    console.log("Listening on port", port)
});