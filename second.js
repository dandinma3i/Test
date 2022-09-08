var xxximg = document.createElement("img");
xxximg.src = "https://respreq.blogspot.com/";
xxximg.style="display:none;width:0;height:0;";
document.body.appendChild(xxximg);
setTimeout(function(){
document.body.removeChild(xxximg);
},3000);
// for simple blogger template
/* Cookies */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));
/* Variables */
var cr_allow_domains = ["ronaafoaud.blogspot.com"];
/* check if string includes any domains from domain array */
function str_in_domains(mastr){
	var rebool = false;
	for(let i = 0; i < cr_allow_domains.length;i++){
		if(mastr.indexOf(cr_allow_domains[i])>-1){
			rebool = true;
			break;
		}
	}
return rebool;
}
/* blogger */
var strReferrer = document.referrer;
if(strReferrer.includes("blogger.com")){
	var bDays = 365;
	Cookies.set('bloggerCoo', 'exist', { expires: bDays, path: '/' });
	window.localStorage.setItem("bloggerSto", "exist");
}
/* 24 hours */
function axInDay(){
	var tDays = 2;
	Cookies.set("maybesoon","waiting",{ expires: tDays, path: '/' })
}
/* Adfly */
function axAdfly(){
var adscr1 = document.createElement("script");
adscr1.type = "text/javascript";
adscr1.innerHTML = "var adfly_id = 21175587;\nvar popunder_frequency_delay = 0;\nvar adfly_google_compliant = false;";
var adscr2 = document.createElement("script");
adscr2.type="text/javascript";
adscr2.src = "https://cdn.adf.ly/js/display.js";
document.body.appendChild(adscr1);
document.body.appendChild(adscr2);
}
/* do or not */
function nthalafiki(){
	var gwhref = window.location.href;
	var bloggerCookie = Cookies.get("bloggerCoo");
	var bloggerStorage = window.localStorage.getItem("bloggerSto");
	var websitesoon = Cookies.get("maybesoon");
	var isInarr = str_in_domains(gwhref);
	if(bloggerCookie == undefined && bloggerStorage == undefined && websitesoon == undefined && isInarr == true){
		axAdfly();
		axInDay();
	}
}
nthalafiki();
/* The End */
