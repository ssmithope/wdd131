document.addEventListener('DOMContentLoaded', () => {
    // Function to calculate wind chill
    function calculateWindChill(temp, windSpeed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    }

    // Static values for temperature and wind speed
    const temperature = 10; // in °C
    const windSpeed = 9; // in km/h

    // Check if conditions are met for wind chill calculation
    let windChill = 'N/A';
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + '°C';
    }

    // Display wind chill in the weather section
    document.querySelector('.weather .wind-chill').textContent = `Wind Chill: ${windChill}`;

    // Display last modified date in the footer
    const lastModified = document.lastModified;
    document.querySelector('.last-modified').textContent = `Last Modification: ${lastModified}`;
});
