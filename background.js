chrome.tabs.onUpdated.addListener((tabId, tab) =>{
    console.log("In here");
    if (tab.url && tab.url.includes("www.google.com/maps/")&& tab.url.includes("@")){
        
        const queryParameters = tab.url.split("@")[1];
        console.log(queryParameters);
        const urlParameters = new URLSearchParams(queryParameters);
        console.log(urlParameters);
        

        if(tab.url.includes("place")){
            chrome.tabs.sendMessage(tabId, {
                type: "Labled",
                locationId: urlParameters.get("")
            });
        }
        else{
            chrome.tabs.sendMessage(tabId, {
                type: "Unlabeled",
                locationId: urlParameters.get("")
            });
        }
        
    }
})
