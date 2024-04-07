(() => {
    let mapButtons;

    const addNewReportHandler = () => {
        const locationBtn = document.querySelector('.ZqLNQd.t9f27');
        if (locationBtn) {
            const ariaLabel = locationBtn.getAttribute('aria-label');
            console.log(ariaLabel);
        }
    };

    const newReportAdded = () => {
        const reportBtnExists = document.getElementsByClassName("report-btn")[0];
        mapButtons = document.getElementsByClassName("BOw3ud");

        if (!reportBtnExists && mapButtons.length > 0) {
            const reportBtn = document.createElement("img");
            reportBtn.src = chrome.runtime.getURL("../assets/reportIcon.png");
            reportBtn.className = "report-btn";
            reportBtn.title = "Report an obstacle";

            console.log(reportBtn);

            mapButtons[0].appendChild(reportBtn); // Append to the first element in the NodeList
            reportBtn.addEventListener("click", addNewReportHandler);
        }
    };

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { value, locationId } = obj;
        newReportAdded();
    });

    newReportAdded();
})();
