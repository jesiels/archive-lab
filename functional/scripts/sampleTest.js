module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('https://archive-lab-dev.mybluemix.net/')
      .waitForElementVisible('#contact .btn', 600000, true,
        function(){
        	console.log("found it");
        }, 'Waiting for Search Input to become visible')
      .click()
      .pause(5000)
      .end();
  }
};
