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
			}, 20);	
		}
		
		if (catagory == 2)
		{
			setTimeout(function(){
				document.getElementById("second").classList.toggle("opacityNone");
			}, 20);	
			
		}



		function show()
		{
			window.location.href = "index.html?c=2";
		}
		
		function hide()
		{
			window.location.href = "index.html?c=1";
		}

			
		