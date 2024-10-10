document.addEventListener('DOMContentLoaded', () => {
    // Update footer with current year and last modified date
    document.querySelector('.year').textContent = `©${new Date().getFullYear()} 🌴Smith Eutrope Zephirin🌴 Madagascar`;
    document.querySelector('.last-modified').textContent = `Last Modification: ${document.lastModified}`;

    // Calculate wind chill factor
    const temp = 10; // Example temperature in Celsius
    const windSpeed = 5; // Example wind speed in km/h

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed >= 4.8) { // Metric condition
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return 'N/A'; // Wind chill not applicable
        }
    }

    const windChill = calculateWindChill(temp, windSpeed);
    document.querySelector('.wind-chill').textContent = `Wind Chill: ${windChill}°C`;
});
