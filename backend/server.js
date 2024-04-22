const express= require('express');
const initialize =require('./api/app.js');
const dotenv =require('dotenv');


dotenv.config();

const app = express();

initialize(app);

const PORT = process.env.PORT || 3002;
app.listen(PORT, console.log(`Server at http://localhost:${PORT}`)
);





module.exports = app;