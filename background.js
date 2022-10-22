var isExtensionOn = true;
chrome.tabs.executeScript({code: "console.log('backgournd hit...')"});

turnItOn();

chrome.extension.onMessage.addListener(
function (request, sender, sendResponse) {
    if (request.cmd == "setOnOffState") {
        isExtensionOn = request.data.value;
    }

    if (request.cmd == "getOnOffState") {
        sendResponse(isExtensionOn);
    }
});

function turnItOn() {
    chrome.browserAction.setIcon({path: "./icons/icon_on.png"});
    chrome.tabs.executeScript({file:"openTooltipMenu.js"});
    //$('#toggle').text('disable');
}