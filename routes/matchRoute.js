const express = require('express');
const router = express.Router();
const MatchController = require('../controller/matchController.js');
const {authenticateJWT} = require('../middleware/index')

router.use(express.json())


router.get('/matches',MatchController.getMatchDetails);
router.get('/matches/:match_id',MatchController.getMatchDetailsById);
router.post('/matches',authenticateJWT,MatchController.createMatch);

module.exports = router;