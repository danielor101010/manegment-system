import userRouter from "../routers/userRouter";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', userRouter)

app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})

export default app