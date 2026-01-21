var s, // alias for settings object
    
  
    // Now, the App object...
    APP = { 
	
	/**
	* SETTINGS
	*/
	settings: {
		
       foo: 'bar',
    },
        
        
	/**
	* FUNCTION: init()
	* ********
	* Initiate things
	*/
	init : function() {
        s = APP.settings; // setup alias for settings object
        
        APP.bindEvents();        
	},
	
		
    /**
	* FUNCTION: bindEvents()
	* ********
	* Call binding functions
	*/
	bindEvents : function() {       
       
		
    },         

}; // The end of APP Object
	
	
/**
* Start things off 
*/
$( document ).ready(function() {
	APP.init();
});
