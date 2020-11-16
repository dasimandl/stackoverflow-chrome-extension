const PATTERNS = ['https://*/*'];

chrome.webRequest.onCompleted.addListener(
    saveResponse,
    {
        urls: [...PATTERNS]
    },
    ['responseHeaders']
);

function saveResponse(responseDetails) {
    console.log('saveResponse -> responseDetails', responseDetails);
    const { tabId } = responseDetails;
    chrome.tabs.executeScript(tabId, {
        file: 'content.js'
    });
}
