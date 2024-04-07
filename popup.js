import { getActiveTabURL } from "./util.js";

const addReport = (label, message) =>{};

const viewReports = (reportsHistory=[]) =>{};
const deleteReport = () => {};
const setReportAttributes = () => {};

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    if(activeTab.url.includes("google.com/maps")){

    }else{
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = '<div class="title">This is not a google maps page.</div>';
    }

});

