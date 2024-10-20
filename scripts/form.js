document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running..."); // Check if this prints in the console

    const productSelect = document.getElementById("product");
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Counter in localStorage
    const counterKey = 'reviewCounter';
    const reviewCounter = localStorage.getItem(counterKey) ? parseInt(localStorage.getItem(counterKey)) : 0;

    document.getElementById('review-form').addEventListener('submit', function() {
        localStorage.setItem(counterKey, reviewCounter + 1);
    });

    console.log(`Number of reviews completed: ${reviewCounter}`);

    // Last modification date and time
    const lastModifiedSpan = document.getElementById("last-modified");
    if (lastModifiedSpan) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        lastModifiedSpan.textContent = lastModified.toLocaleString('en-US', options);
    }
});
