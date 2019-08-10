//Dependencies
//==========================================
const express = require("express");
const cors = require("cors")
const routes = require("./routes");
const app = express();
const mongoose = require("mongoose");;
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;

const http = require("http").Server(app);

//MONGOOSE DATABASE
//==================================
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:3001/marathonAPI",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
    }
)

//if we're in production, serve up our static files from client/build
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Middleware
//==========================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan('dev'))
app.use(cors());
app.use(routes);


//START THE SERVER
//=================================
http.listen(PORT, function () {
    console.log('listening on localhost:', PORT);
})