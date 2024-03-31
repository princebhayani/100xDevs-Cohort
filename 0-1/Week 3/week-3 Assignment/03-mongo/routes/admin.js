const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const express = require("express");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username:username,
        password:password
    })
    .then(function(){
        res.json({
            msg:"Admin created successfully"
        })
    })
    .catch(function(){
        res.json({
            msg:"Admin not created"
        })
    })
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title= req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:"Course created successfully", courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({})
    .then(function(response){
        res.json({
            courses:response
        })
    })
});

module.exports = router;