document.addEventListener('DOMContentLoaded', () => {
    // Update footer with current year and last modified date
    document.querySelector('.year').textContent = `©${new Date().getFullYear()} Rubi Madagascar`;
    document.querySelector('.last-modified').textContent = `Last Modification: ${document.lastModified}`;

    // Calculate wind chill factor
    const temp = 10; // Example temperature
    const windSpeed = 5; // Example wind speed

    function calculateWindChill(temp, windSpeed) {
        return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
    }

    if (temp <= 50 && windSpeed > 3) {
        document.querySelector('.wind-chill').textContent = `Wind Chill: ${calculateWindChill(temp, windSpeed)}°C`;
    }
});
