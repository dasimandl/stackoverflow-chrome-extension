/* global chrome */
(function() {
  if (!document.getElementById("myExtensionIframe")) {
    iframe = document.createElement("iframe");
    var myExtensionContainer = document.createElement("div");
    iframe.name = iframe.id = "myExtensionIframe";
    myExtensionContainer.id = "myExtensionContainer";
    iframe.src = chrome.runtime.getURL("index.html");

    myExtensionContainer.style.height = "100%";
    myExtensionContainer.style.width = "338px";
    myExtensionContainer.style.position = "fixed";
    myExtensionContainer.style.display = "inline";
    myExtensionContainer.style.opacity = "1";
    myExtensionContainer.style.margin = "0px";
    myExtensionContainer.style.padding = "0px";
    myExtensionContainer.style.backgroundColor = "white";
    myExtensionContainer.style.top = "0px";
    myExtensionContainer.style.right = "0px";
    myExtensionContainer.textAlign = "left";
    myExtensionContainer.border = "solid 1px #666666";
    myExtensionContainer.style["-webkit-box-shadow"] = "0px 0px 15px black";
    myExtensionContainer.style.overflow = "hidden";
    myExtensionContainer.style.zIndex = 2147483645;

    //style iframe elements
    iframe.style.display = "block";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = 0;
    iframe.style.resize = "none";

    // add to body
    if (!document.getElementById("iframe")) {
      myExtensionContainer.appendChild(iframe);
      document.body.appendChild(myExtensionContainer);
      console.log('appending iframe to body')
    }
  } else {
    console.log("Already loaded ******");
  }
})();
