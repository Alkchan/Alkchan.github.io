		const urlString = window.location.search;
		const urlParams = new URLSearchParams(urlString);
		var catagory = urlParams.get('c');
		var photoNum = urlParams.get('p');
		
		
		window.addEventListener('popstate', function () {
			alert("popstate");
		});

		
		if (localStorage.getItem("previousUrl") == window.location.search)
		{
			localStorage.setItem("previousUrl","blank");
			location.reload();
		}
		
		
   
   
		
		
		//console.log(window.history.length);
		

		
		// set defaults if no urlParams exist
		if (catagory == null)
		{
			catagory = "places";
		}
		
		if (photoNum == null)
		{
			photoNum = 0;
		}
		

		const placeOrder = [31, 27, 26, 25, 23, 22, 21, 32, 20, 19, 18, 28, 17, 30, 16, 15, 14, 13, 11, 10, 34, 9, 8, 7, 33, 6, 4, 3, 2, 1, 35];
		const autoOrder = [19,18,17,16,15,14,13,12,11,22,10,9,24,21,25,8,7,6,23,5,4,3,2];
		const nihonOrder = [14,20,15,3,5,6,7,8,9,10,11,12,13,1,16,17,18,19,2,21,22,23,24,25,26,27,28,29,30,31];
		//console.log(placeOrder.length);
		
		var url = "photoplaces/";
		

		//Show bold menu item based on url catagory
		var y = document.getElementsByTagName("li");
		var i;
		for (i = 0; i < y.length; i++)
		{
			y[i].style.color = "#aaa";
		}
			
		if (catagory == 'places')
		{
			y[0].style.color = "#666";
			document.querySelector("li:nth-child(2) > .triangleUp").style.display = "block";
			var textNum = placeOrder.indexOf(parseInt(photoNum),0) + 1;
		}
		else if (catagory == 'auto')
		{
			y[1].style.color = "#666";
			document.querySelector("li:nth-child(3) > .triangleUp").style.display = "block";
			var textNum = autoOrder.indexOf(parseInt(photoNum),0) + 1;
		}
		else if (catagory == 'nihon')
		{
			y[2].style.color = "#666";
			document.querySelector("li:nth-child(4) > .triangleUp").style.display = "block";
			var textNum = nihonOrder.indexOf(parseInt(photoNum),0) + 1;
		}
		else if (catagory == 'contact')
		{
			y[3].style.color = "#666";
			document.querySelector("li:nth-child(5) > .triangleUp").style.display = "block";
		}
		
		url = "photo" + catagory +"/";
		
		if (photoNum > 0)
		{
			//hide all container classes
			var x = document.getElementsByClassName("container");
			var i;
			for (i = 0; i < x.length; i++)
			{
				x[i].style.display = 'none';
			}
			document.getElementById("contact").style.display = "none";
			
			if (textNum < 10)
			{
				document.getElementById("imgNum").innerHTML = "0" + textNum;
			}
			else
			{
				document.getElementById("imgNum").innerHTML = textNum;
			}
			
			//show larger photo
			
			document.getElementById('bigimg').src = url + photoNum + ".jpg";	
			//document.getElementById("loading").style.display = "block";		
			//document.getElementById("loading").style.opacity = "100%";				
			 
			document.getElementById('bigimg').addEventListener("load", function () { 
				setTimeout(function(){
					document.getElementById("imgCont").style.opacity = "100%";
					//document.getElementById("loading").style.display = "none";	
					//document.getElementById("loading").style.opacity = "0%";
				}, 50);
			} );
			
			/*
			window.addEventListener("load", event => {
				var image = document.getElementById('bigimg');
				var isLoaded = image.complete && image.naturalHeight !== 0;
				alert(isLoaded);
			});*/
			

			

		}
		else
		{
			//Hide all containers
			var x = document.getElementsByClassName("container");
			var i;
			for (i = 0; i < x.length; i++)
			{
			  x[i].style.display = 'none';
			}
			document.getElementById("contact").style.display = "none";
		  
			document.getElementById(catagory).style.display = "inline-grid";
			
			
			
			setTimeout(function(){
				//document.getElementById(catagory).classList.remove("hide");
				//document.getElementById(catagory).classList.add("show");
				document.getElementById(catagory).style.opacity = "100%";
				
				if (catagory == "nihon")
				{
					document.getElementById("nihon35link").style.display = "block";
					document.getElementById("nihon35link").style.opacity = "100%";
					
					
				}
			
			}, 50);
			

			//document.getElementById(catagory).classList.add("show");
			
			
			//document.getElementById('bigimg').addEventListener('transitionend', function() { document.getElementById('bigimg').style.display = "none"; });
			//document.getElementById('bigimg').addEventListener('transitionend', function() { document.getElementById('imgCont').style.display = "none"; });
			//document.getElementById('bigimg').addEventListener("load", function () {document.getElementById('bigimg').className = "fadeout";  } );

			//document.getElementById('bigimg').style.display = "none";
			//document.getElementById("imgCont").classList = "hide"
			document.getElementById('imgCont').style.display = "none";
			url = "photo" + catagory +"/";
			

			
			
		}
		
		function test()
		{
			var x = document.getElementsByClassName("container");
			var i;
			for (i = 0; i < x.length; i++)
			{
			  x[i].style.display = 'none';
			}
			document.getElementById("contact").style.display = "none";
		}
		
		
		/*document.addEventListener('keydown', function(event) {
			if(event.keyCode == 37) {
				photoNum -=1;
			}
			else if(event.keyCode == 39) {
				photoNum +=1;
			}
		});*/
		

		function show(num, additional)
		{
			document.getElementById(catagory).style.opacity = "0%";

			
			if (catagory == "nihon")
			{
				document.getElementById("nihon35link").style.opacity = "0%";
				
				setTimeout(function(){
					document.getElementById("nihon35link").style.display = "none";
				}, 200);
			}
			
			setTimeout(function(){
				localStorage.setItem("previousUrl",window.location.search);
				window.location.href = "index.html?c=" + catagory + "&p=" + num;
			}, 200);			
		}

		function showtn() 
		{
			num = 0;
			
			document.getElementById("imgCont").style.opacity = "0%";

			
			setTimeout(function(){
				localStorage.setItem("previousUrl",window.location.search);
				window.location.href = "index.html?c=" + catagory + "&p=" + num;
			}, 200);			
		}

		function showCatagory(catName)
		{
			num = 0;
			catagory = catName;
			localStorage.setItem("previousUrl",window.location.search);
			window.location.href = "index.html?c=" + catagory + "&p=" + num;
		}
		
		function home()
		{
			localStorage.setItem("previousUrl",window.location.search);
			window.location.href = 'index.html';
		}
		
		function nihon35()
		{
			window.open("https://www.alkchan.com/nihon35/");
		}
		

		
		/*document.addEventListener('keydown', function(event) {
			if(event.keyCode == 37) {
				document.getElementById('bigimg').src = url + number-- + ".jpg"
			}
			else if(event.keyCode == 39) {
				document.getElementById('bigimg').src = url + number++ + ".jpg"
			}
		});*/