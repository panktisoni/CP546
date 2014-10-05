module.exports = function (data) {
	var express = require('express');
	var router = express.Router();
	var user = data.user;
	
	/* GET catalog page. */
	router.get('/', function(req, res) {
		res.render('catalog', { title: 'University Manager | Class Catalog', user: user });
	});
	
	/* GET schedule page. */
	router.get('/schedule', function(req, res) {
		res.render('schedule', { title: 'University Manager | My Schedule', user: user });
	});
	
	/* GET add page. */
	router.get('/addcourse', function(req, res) {
		res.render('addcourse', { title: 'University Manager | Add Class Schedule', user: user });
	});
	
	/* GET add page. */
	router.get('/addschedule', function(req, res) {
		res.render('addschedule', { title: 'University Manager | Class Scheduled Added', user: user });
	});
	
	return router;
};
