const express = require('express');

//WEBISTE ROUTES
const webRoute = require('./websiteRoute')

//posts
const postRoute = require('./postRoute')

//cards
const cardRoute = require('./cardRoute')


//cards gallery
const cardGalleryRoute = require('./cardGalleryRoute')


//auth
const userRoute = require('./userRoute')

//Middlewares
const admin = require('../middlewares/admin')


function initRoutes(app) {


    //WEB PAGES API
    app.use('/website', webRoute)
    


    //API

    //login route
    app.use('/apiUsers', userRoute)


    //POSTS
    app.use('/apiPost', admin, postRoute)


    //CARDS
    app.use('/apiCard', admin,  cardRoute)

    //CARDS Gallery
    app.use('/apiCardGallery', admin ,  cardGalleryRoute)

}


module.exports=initRoutes
