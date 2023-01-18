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
specialIframe();
