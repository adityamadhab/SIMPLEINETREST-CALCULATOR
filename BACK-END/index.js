const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/simpleinterest', (req,res)=> {
    const principle = parseFloat(req.query.principle);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);

    const interest = (principle*rate*time) / 100;
    const total = principle + interest;
    res.json({
        "total": total ,
        "Interest": interest 
    });
});

app.listen(3000)