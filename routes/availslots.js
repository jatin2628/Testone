const verifyus = require('../utils/verify');
const express = require('express');
const router = express.Router();
const availSlotController = require('../controller/availibilitySlots');

router.post("/availslots",verifyus,availSlotController.avSlots);

router.get("/list",verifyus,availSlotController.listSlots);



module.exports = router;