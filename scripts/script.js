function checkWidth() {
    const mobileContent = document.getElementById('mobile-web');
    const Errormsg = document.getElementById("msgbox");

    if (window.innerWidth > 400) {
        // Hide mobile content
        mobileContent.style.display = "none";

        // Displays message
        Errormsg.style.display = "block";
        
    } else {
        // Show mobile content
        mobileContent.style.display = "block";
        Errormsg.style.display = "none";
    }
}

// Run the check on window resize and load
window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);
