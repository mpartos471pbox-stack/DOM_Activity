function displayBrowserInfo() {
    const info = `
        Browser Name: ${navigator.appName} <br>
        Browser Version: ${navigator.appVersion} <br>
        Platform (OS): ${navigator.platform} <br>
        Java Enabled: ${navigator.javaEnabled()} <br>
        Screen Resolution: ${screen.width} x ${screen.height} <br>
        Available Screen Size: ${screen.availWidth} x ${screen.availHeight} <br>
        Color Depth: ${screen.colorDepth}
    `;
    document.getElementById("browserInfo").innerHTML = info;
}

// Part B: Page Information
function displayPageInfo() {
    document.getElementById("currentURL").textContent = location.href;
    document.getElementById("hostname").textContent = location.hostname;
    document.getElementById("pageTitle").textContent = document.title;
}

function changeTitle() {
    const newTitle = prompt("Enter new page title:");
    if (newTitle) {
        document.title = newTitle;
        document.getElementById("pageTitle").textContent = newTitle;
    }
}

function changeTitleToDefault() {
    document.title = "Default Title";
}

// Part C: Navigation Controls
function reloadPage() {
    location.reload();
}

function redirectPage() {
    location.href = "https://www.Google.com";
}

function goBack() {
    history.back();
}

function goForward() {
    history.forward();
}

// Part D: Dynamic Styling
function changeBackgroundColor() {
    const width = window.innerWidth;

    if (width < 600) {
        document.body.style.backgroundColor = "blue";
    } 
    else if (width >= 600 && width <= 991) {
        document.body.style.backgroundColor = "green";
    } 
    else {
        document.body.style.backgroundColor = "orange";
    }
}

// Initial Load
window.onload = function() {
    displayBrowserInfo();
    displayPageInfo();
    changeBackgroundColor();
};

// Resize Event
window.onresize = changeBackgroundColor;