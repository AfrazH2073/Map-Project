(() =>{
    let googleReport, googleMap;
    let currentLocation = "";

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {value, locationId} = obj;

        currentLocation = locationId;
        newReportAdded();
    });

    const newReportAdded = () => {
        const reportBtn = document.createElement(img);

        reportBtn.src = chrome.runtime.getURL("../assets/reportIcon.png");
        reportBtn.className = "report-btn";
        reportBtn.title = "Click to report a road block";
    }
})();