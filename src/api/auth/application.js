exports.IsAuthenticated = function(req,res,next){
	if(req.isAuthenticated()){
		next();
	}else{
    	res.render('welcome/index',{message:'Ops! Efetur o login para prosseguir!'});
	}
};

exports.destroySession = function(req,res,next){
	req.session.destroy();
    res.redirect('welcome/index');
};