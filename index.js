const express = require("express");
const mongoose = require("mongoose")
const router = require('./route/user')
const app = express()
app.use(express.json())

app.use('/api/user' , router)

Dbconnection = () => {
    const url = 'mongodb+srv://sudeshsurve:vNVWqQF46S9oPa7N@cluster0.hxvvxmg.mongodb.net/expenseDb?retryWrites=true&w=majority'
    try {
        // Connect to the MongoDB cluster
        mongoose.set('strictQuery', false)
        mongoose.connect(
            url,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected"),
        );
    } catch (e) {
        console.log("could not connect");
    }
    const dbConnection = mongoose.connection;
    dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    dbConnection.once("open", () => console.log("Connected to DB!"));

}
Dbconnection()


app.listen(5000, () => {
    console.log("server listen on 5000");
})