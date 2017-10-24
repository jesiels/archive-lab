module.exports = {
  	'Sample functional test' : function (browser) {
		
	    browser
	      .url('https://archive-lab-dev.mybluemix.net/')
	      .waitForElementPresent('#navbar-item-contact', 600000,true, function(){
	      	console.log('found Contact Button');
	      }, 'Waiting for Contact Button')
	      .click('#navbar-item-contact', function(){
	      	console.log('contact button Clicked');
	      })
	      .waitForElementVisible('#contact .btn', 600000, true,
	        function(){
	        	console.log("found it");
	        }, 'Waiting for Search Input to become visible')
	      .click('#contact .btn', function(){
	      	console.log('clicked');
	      });
	    
	      
	      console.log(browser);
	      
	      var i = 0;
	      while ( i < 1000 ) {
	      		browser.click('#contact .btn' , function() {
	      			console.log('contact btn click');
	      		});  
	      		i++;
	      }
  		browser
 		.pause(5000)
	    .end();

  }
};
