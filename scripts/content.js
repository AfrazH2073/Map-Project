(() =>{
    let mapButtons, googleMap;
    let currentLocation = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {value, locationId} = obj;

        currentLocation = locationId;
        newReportAdded();
    });

    console.log("HERE")
    const newReportAdded = () => {
        const reportBtnExists = document.getElementsByClassName("report-btn")[0];
        mapButtons = document.getElementsByClassName("BOw3ud");
        console.log("mapButtons:", mapButtons);

        if (!reportBtnExists && mapButtons.length > 0) {
            console.log("Entering if statement");
            const reportBtn = document.createElement("img");
            reportBtn.src = chrome.runtime.getURL("../assets/reportIcon.png");
            reportBtn.className = "report-btn";
            reportBtn.title = "Report an obstacle";
            

            mapButtons[0].appendChild(reportBtn); // Append to the first element in the NodeList
            reportBtn.addEventListener("click", addNewReportHandler);
        }

    }
    newReportAdded();
})();