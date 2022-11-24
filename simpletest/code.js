		const urlString = window.location.search;
		const urlParams = new URLSearchParams(urlString);
		var catagory = urlParams.get('c');


		
		// set defaults if no urlParams exist
		if (catagory == null)
		{
			catagory = 1;
		}
		
		
		if (catagory == 1)
		{
			document.getElementById("first").classList.toggle("displayNone");
			
			setTimeout(function(){
				document.getElementById("first").classList.toggle("opacityNone");
				
			}, 20);	
		}
		
		if (catagory == 2)
		{
			document.getElementById("second").classList.toggle("displayNone");
			
			setTimeout(function(){
				document.getElementById("second").classList.toggle("opacityNone");
			}, 20);	
			
		}



		function show()
		{
			document.getElementById("first").classList.toggle("opacityNone");
			
			setTimeout(function(){
				window.location.href = "index.html?c=2";
			}, 500);	
			
			
		}
		
		function hide()
		{
			document.getElementById("second").classList.toggle("opacityNone");
			
			setTimeout(function(){
				window.location.href = "index.html?c=1";
			}, 500);	
		}

			
		