function getOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

let os = getOS();
if (os === "Android") {
    window.location.replace("https://play.google.com/store/apps/details?id=com.erikboesen.comethru");
} else if (os === "iOS") {
    window.location.replace("https://apps.apple.com/us/app/comethru-yale/id1487264399");
} else {
    window.location.replace("/");
}
