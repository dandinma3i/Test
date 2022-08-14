/*adfly before every things please*/
function forAdfly(){
	/* Create float div */
	var cdiv1 = document.createElement("div");
	cdiv1.style = "display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:2000";
	document.body.appendChild(cdiv1);
	cdiv1.addEventListener("click",function(){
		setTimeout(function(){
			document.body.appendChild(cdiv1);
		},60000);
		document.body.removeChild(cdiv1);
	});
	/* script num 1 */
	var script1 = document.createElement("script");
	script1.type="text/javascript";
	script1.innerHTML = "var adfly_id = 21175587;var popunder_frequency_delay = 0;var adfly_google_compliant = false;";
	document.body.appendChild(script1);

	/* script num 2 */
	var script2 = document.createElement("script");
	script2.src = "https://cdn.adf.ly/js/display.js";
	document.body.appendChild(script2);
}

/* Special iframe */
function specialIframe(){
	var cdiv2 = document.createElement("div");
	cdiv2.style = "display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:2100";
	cdiv2.innerHTML = "<iframe scrolling='no' style='width:100%;height:100%;border:0;' src='https://animeflv-cc.blogspot.com/'/>";
	document.body.appendChild(cdiv2);
	document.addEventListener('visibilitychange', function (event) {
	    if (document.hidden) {
	        cdiv2.style.display="none";
	    } else {
	        setTimeout(function(){cdiv2.style.display="block";},100000);
	    }
	});
}
forAdfly();
specialIframe();
