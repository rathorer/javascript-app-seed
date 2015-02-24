(function(){
	var address=require('./app/address.js');
	document.write(address('Guest'));
	document.write("</br><b>...Lets start...writing document...</b>");
	document.write('<h2>This is basic template to start your app.</h2>');
	document.write('<div><label style="font-weight: bold; color: red;">It is using browserify to bundle all js files/modules and start your app.</label></div>');
})();
