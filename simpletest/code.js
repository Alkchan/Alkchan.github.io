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
			
			setTimeout(function(){
				document.getElementById("first").classList.toggle("opacityNone");
				document.getElementById("first").classList.toggle("displayNone");
			}, 20);	
		}
		
		if (catagory == 2)
		{
			
			setTimeout(function(){
				document.getElementById("second").classList.toggle("opacityNone");
				document.getElementById("second").classList.toggle("displayNone");
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

			
		