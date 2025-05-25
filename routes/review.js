const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapasync.js");
const { validateReview, isLoggedIn, isReviewOwner } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//post review route
router.post("/",validateReview, isLoggedIn, wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId", isLoggedIn, isReviewOwner, wrapAsync(reviewController.destroyReview));

module.exports = router;