const gameheader = document.getElementById("gameheader");
const gameiFrame = document.getElementById("gameiFrame");
const fullscreenbtn = document.getElementById("fullscreenbtn");
const shllshckrsgmbttn = document.getElementById("shllshckrsgmbttn");
const chssdtcmbttn = document.getElementById("chssdtcmbttn");
const vryvryplnbttn = document.getElementById("vryvryplnbttn");
const trrtrliogmbttn = document.getElementById("trrtrliogmbttn");
const sndbxlsgmbttn = document.getElementById("sndbxlsgmbttn");
const youtubebtn = document.getElementById("youtubebtn");
const minecraftgmbttn = document.getElementById("minecraftgmbttn");
const helpbtn = document.getElementById("helpbtn");
const help = document.getElementById("help");
const browser = document.getElementById("browser");
const browserResetbtn = document.getElementById("browserResetbtn");
const browserfullscreenbtn = document.getElementById("browserfullscreenbtn");
var unblockedURLs = {
  shellshockers:   "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-sjenlqhmci.ko-",
  chessDOTcom: "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-wuw%2Ccjeqs%2Ccmm-",
  VeryVeryPlane: "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-v4p%3Bd%3Bt6.qsn.jwadl.lev%2Fjtol-172%3B316-Vgr%7B%2500Tepy'22Pnale-ildgx%2Chvmn%3Fie%7B%3D%7B8%24vclwe%3Fdgfcunt",
  TerritorialIO: "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-tgrpivopicl%2Cim%2F",
  sandboxels: "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-scnfbmxglq.p76n%2Ccmm-",
  youtube: "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-",
  minecraft: "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-ma.necrlmctju%60.aoo%2F"
};
gameheader.innerHTML = "Shell Shockers";
gameiFrame.src = unblockedURLs.shellshockers;
shllshckrsgmbttn.disabled = true;
browserfullscreenbtn.onclick = function() {
  browser.requestFullscreen();
};
browserResetbtn.onclick = function() {
  browser.src = "https://euyfeid4.username93939.repl.co/service/hvtrs8%2F-wuw%2Csvaptraee%2Ccmm-";
};
fullscreenbtn.onclick = function() {
  gameiFrame.requestFullscreen();
};
shllshckrsgmbttn.onclick = function() {
  gameheader.innerHTML = "Shell Shockers";
  gameiFrame.src = unblockedURLs.shellshockers;
  this.disabled = true;
  trrtrliogmbttn.disabled = false;
  vryvryplnbttn.disabled = false;
  chssdtcmbttn.disabled = false;
  sndbxlsgmbttn.disabled = false;
  youtubebtn.disabled = false;
  minecraftgmbttn.disabled = false;
};
chssdtcmbttn.onclick = function() {
  gameheader.innerHTML = "chess.com";
  gameiFrame.src = unblockedURLs.chessDOTcom;
  this.disabled = true;
  trrtrliogmbttn.disabled = false;
  vryvryplnbttn.disabled = false;
  shllshckrsgmbttn.disabled = false;
  sndbxlsgmbttn.disabled = false;
  youtubebtn.disabled = false;
  minecraftgmbttn.disabled = false;
};
vryvryplnbttn.onclick = function() {
  gameheader.innerHTML = "Very Very Plane";
  gameiFrame.src = unblockedURLs.VeryVeryPlane;
  this.disabled = true;
  trrtrliogmbttn.disabled = false;
  chssdtcmbttn.disabled = false;
  shllshckrsgmbttn.disabled = false;
  sndbxlsgmbttn.disabled = false;
  youtubebtn.disabled = false;
  minecraftgmbttn.disabled = false;
};
trrtrliogmbttn.onclick = function() {
  gameheader.innerHTML = "territorial.io";
  gameiFrame.src = unblockedURLs.TerritorialIO;
  this.disabled = true;
  vryvryplnbttn.disabled = false;
  chssdtcmbttn.disabled = false;
  shllshckrsgmbttn.disabled = false;
  sndbxlsgmbttn.disabled = false;
  youtubebtn.disabled = false;
  minecraftgmbttn.disabled = false;
};
sndbxlsgmbttn.onclick = function() {
  gameheader.innerHTML = "Sandboxels";
  gameiFrame.src = unblockedURLs.sandboxels;
  this.disabled = true;
  youtubebtn.disabled = false;
  trrtrliogmbttn.disabled = false;
  vryvryplnbttn.disabled = false;
  chssdtcmbttn.disabled = false;
  shllshckrsgmbttn.disabled = false;
  minecraftgmbttn.disabled = false;
};
youtubebtn.onclick = function() {
  gameheader.innerHTML = "Youtube";
  gameiFrame.src = unblockedURLs.youtube;
  this.disabled = true;
  sndbxlsgmbttn.disabled = false;
  trrtrliogmbttn.disabled = false;
  vryvryplnbttn.disabled = false;
  chssdtcmbttn.disabled = false;
  shllshckrsgmbttn.disabled = false;
  minecraftgmbttn.disabled = false;
};
minecraftgmbttn.onclick = function() {
  gameheader.innerHTML = "Minecraft";
  gameiFrame.src = unblockedURLs.minecraft;
  this.disabled = true;
  sndbxlsgmbttn.disabled = false;
  trrtrliogmbttn.disabled = false;
  vryvryplnbttn.disabled = false;
  chssdtcmbttn.disabled = false;
  shllshckrsgmbttn.disabled = false;
  youtubebtn.disabled = false;
};
helpbtn.onclick = function() {
  alert("type anything into the search engine that will be opened\nthen refresh the page");
  var newwin = window.open("https://euyfeid4.username93939.repl.co");
  if (!newwin) {
    alert("error: could not open window");
  } else {
    help.remove();
  }
};
