const verifyus = require('../utils/verify');
const express = require('express');
const router = express.Router();
const availController = require('../controller/availibility');

router.post("/avail",verifyus,availController.Availibility);


module.exports = router;