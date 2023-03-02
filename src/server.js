const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require('./dbContext/mongo');

const User = require('./routes/users');

const PORT = 5000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json({limit: "1mb"}));
app.use(express.urlencoded({extended: false}));

app.use(User);

app.get('/', (req, res) => {
    res.status(200).send('All is well');
})

app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));