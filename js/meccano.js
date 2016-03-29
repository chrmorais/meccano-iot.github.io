$(document).ready(function(){
	function resizebg(){
        $('.lateral').css("height", $(document).height());
    }
    $(window).resize(function(){
        resizebg(); 
    });
    
    //initial call
    resizebg();
});