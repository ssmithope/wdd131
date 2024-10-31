document.addEventListener('DOMContentLoaded', function() {
    // Dynamic build of the Product Name field
    const products = ['Product 1', 'Product 2', 'Product 3'];
    const productSelect = document.getElementById('product');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productSelect.appendChild(option);
    });

    // Local storage feature for form data
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Save form data to localStorage
        const formData = new FormData(reviewForm);
        for (let [key, value] of formData.entries()) {
            localStorage.setItem(key, value);
        }

        // Redirect or provide feedback
        alert('Review submitted successfully!');
        reviewForm.reset();
    });

    // Display last modified date
    const lastModified = document.getElementById('last-modified');
    lastModified.textContent = document.lastModified;
});
