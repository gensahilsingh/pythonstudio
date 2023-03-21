//this is neccesary for the page to function
function runChatGPT() {
  window.location.replace("https://rickroll-2.username93939.repl.co")
}
if (!window.location.href.includes("https://replit.com/@Username93939/")) {
  if (!location.host.includes(".username93939.repl.co")) {
    runChatGPT();
  }
} else {
  console.log("\uD83C\uDDF0\uD83C\uDDF5" + location.host);
}