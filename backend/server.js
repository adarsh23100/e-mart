const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Config
dotenv.config({path:"backend/config/config.env"});

//Connectig to database
connectDatabase();

app.listen(process.env.port,() => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})