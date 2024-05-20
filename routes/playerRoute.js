const express = require('express');
const router = express.Router();
const PlayerController = require('../controller/playerController.js');
const {authenticateJWT} = require('../middleware/index')

router.use(express.json())


router.get('/players',PlayerController.getPlayers);
router.get('/players/:player_id',PlayerController.getPlayerDetailsById);
router.post('/teams/:team_id/sqard',authenticateJWT,PlayerController.insertPlayer);

module.exports = router;