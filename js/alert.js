const newAlert = document.getElementById("alert");
const alertIcon = document.getElementById("alert-icon");
const alertContent = document.getElementById("alert-content");
const alertProgress = document.getElementById("alert-progress");
const closeAlert = document.querySelector(".alert-close-btn");

const ALERT_CONFIG = {
    success: {
        className: "alert--success",
        icon: "images/alert-icon/alert-success.svg"
    },
    info: {
        className: "alert--info",
        icon: "images/alert-icon/alert-info.svg"
    },
    warning: {
        className: "alert--warning",
        icon: "images/alert-icon/alert-warning.png"
    },
    error: {
        className: "alert--error",
        icon: "images/alert-icon/alert-error.svg"
    }
}


function showAlert(status, message) {
    const config = ALERT_CONFIG[status];
    if (config) {
        closeAlert.addEventListener('click', () => {
            newAlert.classList.remove("active");
            setTimeout(() => {
                alertProgress.classList.remove("active");
            }, 300);
        })
    }
    if (!config) {
        throw new Error("Unknown status for alert");
    }
    newAlert.setAttribute("class", `alert ${config.className} active`);
    alertIcon.setAttribute('src', config.icon);
    alertContent.innerText = message;
    alertProgress.classList.add("active");
    setTimeout(() => {
        newAlert.classList.remove("active");
    }, 5000);
    setTimeout(() => {
        alertProgress.classList.remove("active");
    }, 5300);
}