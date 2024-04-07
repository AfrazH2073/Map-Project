chrome.tabs.onUpdated.addListener((tabId, tab) =>{
    if (tab.url && tab.url.includes("www.google.com/maps/")&& tab.url.includes("@")){
        if(tab.url.includes("place")){
            
        }
        const queryParameters = tab.url.split("@")[1];
        console.log(queryParameters);
        const urlParameters = new URLSearchParams(queryParameters);
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "Unlabeled",
            locationId: urlParameters.get("")
        });
    }
})