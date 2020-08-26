let express = require('express');
let router = express.Router();
let destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create);
router.delete('/flights/:id/destinations/:destid', destinationsCtrl.delete); 

module.exports = router;