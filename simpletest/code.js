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
		}
		
		if (catagory == 2)
		{
			document.getElementById("first").classList.toggle("displayNone");
			document.getElementById("second").classList.toggle("displayNone");
		}



		function show()
		{
			window.location.href = "index.html?c=2";
		}
		
		function hide()
		{
			window.location.href = "index.html?c=1";
		}

			
		