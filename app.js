require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const testRouter = require("./src/routes/test");
const baseRouter = require("./src/routes/router");


const port = process.env.PORT || 6000;
const app = express();

app.use(cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", baseRouter);
app.use("/test", testRouter);


app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'amar.html'))
});



app.listen(port, (req, res) => {
    console.log(`server is running at port no. ${port}`);
})