module.exports= function(req,res,next) {
    console.log("external middleware executing");
    next();
}

   