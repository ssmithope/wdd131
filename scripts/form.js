document.addEventListener("DOMContentLoaded", function() {
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
});