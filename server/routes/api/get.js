const express = require('express');
const router = express.Router();

router.get('/' , async (req , res) =>
{
    //Need to make an obj that take the data and do all the querys
    res.status(200).send("DataBack");
});


module.exports = router;