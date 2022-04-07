const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

// Register a user
exports.registerUser = catchAsyncErrors( async(req,res,next)=>{
    
})