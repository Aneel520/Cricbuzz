const express = require('express');
const router = express.Router();
const TeamsController = require('../controller/teamsController.js');

router.use(express.json())

router.get('/teams',TeamsController.getTeams);
router.post('/teams',TeamsController.addTeams);

module.exports = router;