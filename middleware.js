module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to do that!");
        return res.redirect("/login");
    }
    next();
};


// module.exports.saveRedirectUrl = (req, res, next) => {
//     if(req.session &&req.session.redirectUrl){
//         res.locals.redirectUrl = req.session.redirectUrl;
//         delete req.session.redirectUrl; //optional but good
//     }
//     next();
// };



module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session?.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
};