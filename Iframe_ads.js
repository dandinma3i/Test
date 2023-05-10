/* cookies */
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}
/* Important Variables */
var adfly_id = 27196041;
var popunder_frequency_delay = 0;
var adfly_google_compliant = false;
var fixedDiv = document.createElement("div");
fixedDiv.style = "display:none;width:100%;height:100%;position:fixed;top:0;left:0;z-index:9999999;background-color:red;";
document.body.appendChild(fixedDiv);
fixedDiv.onclick = function(){
  hideFixedDiv();
  showFixedDivAfter();
}
function hideFixedDiv(){
  fixedDiv.style.display = "none";
}
function showFixedDiv(){
  fixedDiv.style.display = "block";
}
function showFixedDivAfter(){
  setTimeout(function () {
    showFixedDiv();
  }, 20000);
}
function adflyid8732() {
  let script2 = document.createElement("script");
  script2.src = "https://cdn.adf.ly/js/display.js";
  document.body.appendChild(script2);
}

if(getCookie("huhuhui") === "yes"){
  showFixedDivAfter();
}else{
  showFixedDiv();
  setCookie("huhuhui","yes",1)
}

adflyid8732();
