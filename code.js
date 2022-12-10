	/*window.addEventListener('load', function () {
		console.log("Page has fully loaded");
	})*/
	
	/*window.addEventListener("load", pageFullyLoaded, false);
	function pageFullyLoaded(e)
	{
	}*/
	
	/*window.addEventListener("load", event => {
	var image = document.getElementById('bigimg');
	var isLoaded = image.complete && image.naturalHeight !== 0;
	alert(isLoaded);
	});*/
	
	/*setTimeout(function(){
	}, 300);*/

	const urlString = window.location.search;
	const urlParams = new URLSearchParams(urlString);
	var catagory = urlParams.get('c');
	var photoNum = urlParams.get('p');
	var photoToggle = urlParams.get('t');
	var url = "photoplaces/";
		
	// set defaults if no urlParams exist
	if (catagory == null)
	{
		catagory = "places";
	}

	if (photoNum == null)
	{
		photoNum = 0;
	}

	const placeOrder = [31, 27, 26, 25, 23, 22, 21, 32, 20, 19, 18, 28, 17, 30, 16, 15, 14, 13, 11, 10, 34, 9, 8, 7, 33, 6, 4, 3, 2, 1, 35, 37];
	const autoOrder = [19,18,17,16,26,14,13,12,11,22,10,9,24,21,25,8,7,6,23,5,4,3,2,15];
	const nihonOrder = [14,20,15,3,5,6,7,8,9,10,11,12,13,1,16,17,18,19,2,21,22,23,24,25,26,27,28,29,30,31];

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
		if (textNum < 10)
		{
			document.getElementById("imgNum").innerHTML = "0" + textNum;
		}
		else
		{
			document.getElementById("imgNum").innerHTML = textNum;
		}
	
		document.getElementById("imgCont").classList.toggle("displayNone");
		
		//show spinner
		document.getElementById("lds-ring").classList.toggle("opacityNone");
		
		//change url of requested photo
		document.getElementById('bigimg').src = url + photoNum + ".jpg";	
		
		 
		//check to see if selected image has loaded
		document.getElementById('bigimg').addEventListener("load", function ()
		{ 
			//hide loading
			document.getElementById("lds-ring").classList.toggle("opacityNone");
			
			//show loaded image
			document.getElementById("bigimg").classList.toggle("opacityNone");
			document.getElementById("imgNum").classList.toggle("opacityNone");
		
			setTimeout(function(){
				//document.getElementById("imgCont").classList.toggle("opacityNone");
			}, 20);
			
		} );
		
		if (photoToggle == 1)
		{
			document.querySelector(".checkContainer").classList.toggle("displayNone");
			document.getElementById('bigimg2').src = url + photoNum + "b.jpg";	
			document.getElementById('bigimg2').classList.toggle("displayNone");	
			document.getElementById('check').checked = false;
		}

		

		
		
	}
	else
	{
		document.getElementById(catagory).classList.toggle("displayNone");
		
		setTimeout(function(){
			
			document.getElementById(catagory).classList.toggle("opacityNone");
				
			if (catagory == "nihon")
			{
				document.getElementById("nihon35link").classList.toggle("displayNone");
				document.getElementById("nihon35link").classList.toggle("opacityNone");
			}
		}, 20);
		
		url = "photo" + catagory +"/";
	}
	
	//functions
	function show(num, toggle)
	{
		window.location.href = "index.html?c=" + catagory + "&p=" + num + "&t=" + toggle;
	}

	function showtn() 
	{
		num = 0;
		
		document.getElementById('check').checked = false;
		ticked();
		
		window.location.href = "index.html?c=" + catagory + "&p=" + num;
	}

	function showCatagory(catName)
	{
		num = 0;
		catagory = catName;

		document.getElementById('check').checked = false;
		ticked();

		window.location.href = "index.html?c=" + catagory + "&p=" + num;
		
		
	}
		
	function home()
	{
		window.location.href = 'index.html';
	}
		
	function nihon35()
	{
		window.open("https://www.alkchan.com/nihon35/");
	}
	
	
	document.getElementById("check").onclick = function() { ticked() };

	function ticked() {
		//document.querySelector("div > img:first-child").classList.toggle("moveToLeft");
		document.getElementById("bigimg").classList.toggle("marginLeft-100")
		document.getElementById("bigimg2").classList.toggle("left")
	}
	
	document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        //alert('Left was pressed');
		document.getElementById('check').checked = false;
    }
});


		
	