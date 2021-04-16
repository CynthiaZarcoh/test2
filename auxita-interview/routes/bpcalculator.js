const express = require('express'),
router = express.Router(),
bpcalculator = require('../Controllers/BPCalculator');

router.get('/',bpcalculator.bpcalculator);

module.exports = router;