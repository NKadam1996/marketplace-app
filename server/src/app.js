const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req,res)=>{
    res.json({status: 'OK'});
})

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/test", require("./routes/testRoutes"));

module.exports = app;