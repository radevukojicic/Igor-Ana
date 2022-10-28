const express = require('express');
const router = express.Router();
//Web Site controllers
const website = require('../controllers/website/pagesController')


//routes
router.get('/category/:q',  website.index)
router.get('/stories',website.wedStories)
router.get('/stories/:id',website.wedStoriesSingle)
router.post('/',website.sendEmail)




module.exports = router;